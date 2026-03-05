import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Suspense } from 'react'

// Import pages directly (not lazy) for testing
import Home from '../pages/Home'
import Templates from '../pages/Templates'
import Import from '../pages/Import'
import Builder from '../pages/Builder'
import Settings from '../pages/Settings'

function renderWithRouter(ui: React.ReactElement, { route = '/' } = {}) {
  return render(
    <MemoryRouter initialEntries={[route]}>
      <Suspense fallback={<div>Loading...</div>}>
        {ui}
      </Suspense>
    </MemoryRouter>
  )
}

describe('Home Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Home />)
    // Verify home page rendered with hero banner version tag and CTA
    expect(screen.getByText(`v${__APP_VERSION__}`)).toBeInTheDocument()
    expect(screen.getByText('Enterprise Board Builder')).toBeInTheDocument()
  })

  it('renders hero banner with CTA buttons', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText('Browse Templates →')).toBeInTheDocument()
    expect(screen.getByText('Import Project')).toBeInTheDocument()
  })

  it('renders stat cards', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText('Boards Created')).toBeInTheDocument()
    expect(screen.getByText('Templates Available')).toBeInTheDocument()
    expect(screen.getByText('Imports Processed')).toBeInTheDocument()
  })

  it('renders quick actions', () => {
    renderWithRouter(<Home />)
    expect(screen.getByText('New Board')).toBeInTheDocument()
    expect(screen.getByText('Import File')).toBeInTheDocument()
    expect(screen.getByText('GitHub Project')).toBeInTheDocument()
    // "Recent Boards" appears in both QuickActions and the section heading
    expect(screen.getAllByText('Recent Boards').length).toBeGreaterThanOrEqual(2)
  })

  it('renders recent boards section', () => {
    renderWithRouter(<Home />)
    // With no boards, shows empty state
    expect(screen.getByText(/No boards yet/)).toBeInTheDocument()
  })
})

describe('Templates Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Templates />, { route: '/templates' })
    expect(screen.getByText('Board Templates')).toBeInTheDocument()
  })

  it('renders template gallery', () => {
    renderWithRouter(<Templates />, { route: '/templates' })
    expect(screen.getByPlaceholderText('Search templates...')).toBeInTheDocument()
  })

  it('renders category filter with All button', () => {
    renderWithRouter(<Templates />, { route: '/templates' })
    expect(screen.getByText('All')).toBeInTheDocument()
  })
})

describe('Import Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Import />, { route: '/import' })
    expect(screen.getByText('Import Your Project')).toBeInTheDocument()
  })

  it('renders import tabs', () => {
    renderWithRouter(<Import />, { route: '/import' })
    expect(screen.getByText('File Upload')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('URL')).toBeInTheDocument()
  })
})

describe('Builder Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Builder />, { route: '/builder' })
    expect(screen.getByText('Template')).toBeInTheDocument()
  })

  it('renders step indicator', () => {
    renderWithRouter(<Builder />, { route: '/builder' })
    expect(screen.getByText('Name')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Creating')).toBeInTheDocument()
  })
})

describe('Settings Page', () => {
  it('renders without crashing', () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('renders settings tabs', () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Miro')).toBeInTheDocument()
    expect(screen.getByText('GitHub')).toBeInTheDocument()
    expect(screen.getByText('Appearance')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('renders Miro config by default', () => {
    renderWithRouter(<Settings />, { route: '/settings' })
    expect(screen.getByText('Miro Connection')).toBeInTheDocument()
  })
})
