import { render, screen } from '@testing-library/react'
import MainSection from '../MainSection'


describe('testing Main section component', () => {
  test('renders correct Main section content', () => {
    render(<MainSection content='test content'/>)
    const headerElement = screen.getByRole('heading', { name: 'test content' })
    expect(headerElement).toBeInTheDocument()
  })
})
