import React from 'react'
import PropTypes from 'prop-types'

export default function Header ({ title }) {
  Header.propTypes = {
    title: PropTypes.string
  }

  return (
          <h1 className="header">
            { title }
          </h1>
  )
}
