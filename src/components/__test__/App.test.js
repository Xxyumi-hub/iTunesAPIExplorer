/* eslint-disable no-undef */
import { render, screen, fireEvent } from '@testing-library/react'
import React from 'react'
import App from '../../App'

describe('testing App component', () => {
  test('should be able to type in input', () => {
    render(<App />)
    const inputElement = screen.getByPlaceholderText(/Enter an artist's name/i)
    fireEvent.change(inputElement, { target: { value: 'elton john' } })
    expect(inputElement.value).toBe('elton john')
  })
})
