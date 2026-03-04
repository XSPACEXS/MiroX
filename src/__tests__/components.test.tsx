import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { Badge } from '../components/ui/Badge'
import { Spinner } from '../components/ui/Spinner'
import { Input } from '../components/ui/Input'
import { Modal } from '../components/ui/Modal'
import { Tooltip } from '../components/ui/Tooltip'
import { SearchBar } from '../components/ui/SearchBar'
import { LinearProgress, CircularProgress } from '../components/ui/Progress'

describe('Button', () => {
  it('renders with children text', () => {
    render(<Button>Click Me</Button>)
    expect(screen.getByText('Click Me')).toBeInTheDocument()
  })

  it('renders as disabled', () => {
    render(<Button disabled>Disabled</Button>)
    expect(screen.getByText('Disabled').closest('button')).toBeDisabled()
  })

  it('shows loading spinner when isLoading', () => {
    render(<Button isLoading>Loading</Button>)
    const button = screen.getByText('Loading').closest('button')
    expect(button).toBeDisabled()
  })

  it('renders all variants without crashing', () => {
    const variants = ['primary', 'secondary', 'ghost', 'danger'] as const
    for (const variant of variants) {
      const { unmount } = render(<Button variant={variant}>{variant}</Button>)
      expect(screen.getByText(variant)).toBeInTheDocument()
      unmount()
    }
  })

  it('renders all sizes without crashing', () => {
    const sizes = ['sm', 'md', 'lg'] as const
    for (const size of sizes) {
      const { unmount } = render(<Button size={size}>{size}</Button>)
      expect(screen.getByText(size)).toBeInTheDocument()
      unmount()
    }
  })
})

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Card Content</Card>)
    expect(screen.getByText('Card Content')).toBeInTheDocument()
  })

  it('renders with hoverable prop', () => {
    render(<Card hoverable>Hoverable Card</Card>)
    expect(screen.getByText('Hoverable Card')).toBeInTheDocument()
  })

  it('renders all variants', () => {
    const variants = ['default', 'elevated', 'highlighted', 'interactive'] as const
    for (const v of variants) {
      const { unmount } = render(<Card variant={v}>{v}</Card>)
      expect(screen.getByText(v)).toBeInTheDocument()
      unmount()
    }
  })
})

describe('Badge', () => {
  it('renders children text', () => {
    render(<Badge>Status</Badge>)
    expect(screen.getByText('Status')).toBeInTheDocument()
  })

  it('renders all colors', () => {
    const colors = ['yellow', 'green', 'red', 'blue', 'gray', 'purple', 'orange'] as const
    for (const color of colors) {
      const { unmount } = render(<Badge color={color}>{color}</Badge>)
      expect(screen.getByText(color)).toBeInTheDocument()
      unmount()
    }
  })
})

describe('Spinner', () => {
  it('renders with default size', () => {
    const { container } = render(<Spinner />)
    expect(container.querySelector('[role="status"]')).toBeInTheDocument()
  })

  it('renders all sizes', () => {
    const sizes = ['sm', 'md', 'lg', 'xl'] as const
    for (const size of sizes) {
      const { container, unmount } = render(<Spinner size={size} />)
      expect(container.querySelector('[role="status"]')).toBeInTheDocument()
      unmount()
    }
  })
})

describe('Input', () => {
  it('renders with label', () => {
    render(<Input label="Email" placeholder="test@example.com" />)
    expect(screen.getByText('Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('test@example.com')).toBeInTheDocument()
  })

  it('renders with error message', () => {
    render(<Input label="Name" error="Required field" />)
    expect(screen.getByText('Required field')).toBeInTheDocument()
  })

  it('renders with hint', () => {
    render(<Input label="Token" hint="Get from settings" />)
    expect(screen.getByText('Get from settings')).toBeInTheDocument()
  })
})

describe('Modal', () => {
  it('renders when open', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        <div>Modal Content</div>
      </Modal>
    )
    expect(screen.getByText('Modal Content')).toBeInTheDocument()
  })

  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        <div>Hidden Content</div>
      </Modal>
    )
    expect(screen.queryByText('Hidden Content')).not.toBeInTheDocument()
  })

  it('renders with title', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Test Modal">
        <div>Body</div>
      </Modal>
    )
    expect(screen.getByText('Test Modal')).toBeInTheDocument()
  })
})

describe('Tooltip', () => {
  it('renders children and tooltip content', () => {
    render(
      <Tooltip content="Tooltip text">
        <button>Hover me</button>
      </Tooltip>
    )
    expect(screen.getByText('Hover me')).toBeInTheDocument()
    expect(screen.getByText('Tooltip text')).toBeInTheDocument()
  })
})

describe('SearchBar', () => {
  it('renders with placeholder', () => {
    render(<SearchBar value="" onChange={() => {}} placeholder="Search..." />)
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument()
  })

  it('renders keyboard shortcut hint', () => {
    render(<SearchBar value="" onChange={() => {}} showShortcut />)
    expect(screen.getByText('Cmd+K')).toBeInTheDocument()
  })
})

describe('LinearProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(<LinearProgress value={50} />)
    expect(container.firstChild).toBeInTheDocument()
  })
})

describe('CircularProgress', () => {
  it('renders without crashing', () => {
    const { container } = render(<CircularProgress value={75} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
