import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Hero from '../Hero'

describe('Hero Component', () => {
  it('renders the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/We Build Digital/i)).toBeInTheDocument()
    expect(screen.getByText(/Experiences/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Transform your ideas into powerful web and mobile applications/i)).toBeInTheDocument()
  })

  it('renders CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText(/Start Your Project/i)).toBeInTheDocument()
    expect(screen.getByText(/Watch Demo/i)).toBeInTheDocument()
  })

  it('renders stats preview', () => {
    render(<Hero />)
    expect(screen.getByText('240+')).toBeInTheDocument()
    expect(screen.getByText('120+')).toBeInTheDocument()
    expect(screen.getByText('8+')).toBeInTheDocument()
    expect(screen.getByText('18+')).toBeInTheDocument()
  })

  it('renders the badge', () => {
    render(<Hero />)
    expect(screen.getByText(/Leading IT Development Agency/i)).toBeInTheDocument()
  })
})
