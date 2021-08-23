/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import Header from '../Header'
import React from 'react'

describe('testing Header component', () => {
  // name is the text
  test('renders correct Header text', () => {
    render(<Header title='iTunes API Explorer'/>)
    const headerElement = screen.getByRole('heading', { name: 'iTunes API Explorer' })
    expect(headerElement).toBeInTheDocument()
  })
})
