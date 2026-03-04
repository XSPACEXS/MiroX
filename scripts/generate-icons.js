#!/usr/bin/env node
// Generates app icons from the SVG source
// Run: node scripts/generate-icons.js
const { execSync } = require('child_process')
const path = require('path')
const fs = require('fs')

const buildDir = path.join(__dirname, '..', 'build')

// Convert SVG to PNG using sips (built-in macOS tool)
function svgToPng(svgPath, pngPath, size) {
  // Write a temporary HTML file that renders the SVG
  const svg = fs.readFileSync(svgPath, 'utf8')
  // Use qlmanage or rsvg-convert if available, otherwise keep SVG as reference
  try {
    execSync(`rsvg-convert -w ${size} -h ${size} "${svgPath}" -o "${pngPath}"`, { stdio: 'pipe' })
    console.log(`Generated ${size}x${size} icon`)
  } catch {
    try {
      execSync(`inkscape --export-png="${pngPath}" --export-width=${size} --export-height=${size} "${svgPath}" 2>/dev/null`, { stdio: 'pipe' })
      console.log(`Generated ${size}x${size} icon via Inkscape`)
    } catch {
      console.log(`Could not convert SVG to PNG (need rsvg-convert or Inkscape). Using placeholder.`)
      // Create a minimal valid PNG using Python
      try {
        execSync(`python3 -c "
import struct, zlib, base64

def create_png(size, bg_color, text_color):
    # Simple solid color PNG
    width = height = size
    raw = bytes([0] + [bg_color[0], bg_color[1], bg_color[2], 255] * width for _ in range(height))
    # Actually create with PIL if available
    try:
        from PIL import Image, ImageDraw, ImageFont
        img = Image.new('RGBA', (size, size), (10, 10, 10, 255))
        draw = ImageDraw.Draw(img)
        draw.ellipse([size//4, size//4, 3*size//4, 3*size//4], fill=(255, 214, 0, 30))
        # Draw M
        font_size = int(size * 0.55)
        draw.text((size//2, size//2), 'M', fill=(255, 214, 0, 255), anchor='mm')
        img.save('${pngPath}')
        print('Generated with PIL')
    except ImportError:
        # Create minimal PNG
        import struct, zlib
        def make_png(w, h, color):
            raw_data = b'\\\\x00' + bytes(color) * w
            raw_data = (b'\\\\x00' + bytes(color) * w) * h
            compressed = zlib.compress(raw_data)
            ihdr = struct.pack('>IIBBBBB', w, h, 8, 2, 0, 0, 0)
            def chunk(name, data):
                c = struct.pack('>I', len(data)) + name + data
                return c + struct.pack('>I', zlib.crc32(c[4:]) & 0xffffffff)
            return b'\\\\x89PNG\\\\r\\\\n\\\\x1a\\\\n' + chunk(b'IHDR', ihdr) + chunk(b'IDAT', compressed) + chunk(b'IEND', b'')
        with open('${pngPath}', 'wb') as f:
            f.write(make_png(${size}, ${size}, [10, 10, 10]))
        print('Generated minimal PNG')
" 2>&1`, { stdio: 'inherit' })
      } catch (e2) {
        console.log(`Could not generate ${pngPath}: ${e2.message}`)
      }
    }
  }
}

// Generate icon sizes
svgToPng(
  path.join(buildDir, 'icon.svg'),
  path.join(buildDir, 'icon.png'),
  512
)

// Try to create ICNS using iconutil (macOS built-in)
const iconsDir = path.join(buildDir, 'icon.iconset')
if (!fs.existsSync(iconsDir)) fs.mkdirSync(iconsDir, { recursive: true })

const sizes = [16, 32, 64, 128, 256, 512]
sizes.forEach(size => {
  const name = `icon_${size}x${size}.png`
  const path2x = path.join(iconsDir, `icon_${size}x${size}@2x.png`)
  const pathNormal = path.join(iconsDir, name)
  svgToPng(path.join(buildDir, 'icon.svg'), pathNormal, size)
  if (size <= 512) {
    svgToPng(path.join(buildDir, 'icon.svg'), path2x, size * 2 > 1024 ? 1024 : size * 2)
  }
})

try {
  execSync(`iconutil -c icns "${iconsDir}" -o "${path.join(buildDir, 'icon.icns')}"`, { stdio: 'inherit' })
  console.log('Generated icon.icns')
} catch (e) {
  console.log('Could not create .icns (iconutil may require @2x sizes). Electron-builder will handle conversion.')
}

console.log('Icon generation complete!')
