import React from 'react'
import PropTypes from 'prop-types'

export default function MainSection ({ content }) {
  MainSection.propTypes = {
    content: PropTypes.string
  }

  return (
          <h2 className='main'>
            { content }
          </h2>
  )
}
