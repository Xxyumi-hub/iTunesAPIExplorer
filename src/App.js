import './App.css'
import Album from './components/Album'
import Header from './components/Header'
import MainSection from './components/MainSection'
import React, { useState } from 'react'
import axios from 'axios'

function App () {
  const [query, setQuery] = useState('')
  const [albums, setAlbums] = useState({ results: [] })
  const [loading, setLoading] = useState(false)

  // When form is submitted, we set the state of albums to the the queried url
  const searchAlbums = async (e) => {
    e.preventDefault()
    if (query === '') {
      alert('Please enter an artist\'s name')
    }
    // encode uri component - encodes url sensitive characters to utf 8 encoded version of the character
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album`

    try {
      setLoading(true)
      // pause the function and wait until the axios call is done and put the raw response in data
      const response = await axios.get(url)
      console.log(response.data)
      setAlbums(response.data)
      setLoading(false)
    } catch (error) { // if there any issues getting the data, console log the error message
      console.error('Error fetching the data, please check the console for more details', error)
    }
  }

  // When the query field changes, update state to be the current value
  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <div className="App">
      <Header title="iTunes API Explorer"/>
      <header className="App-header"/>
      <MainSection content='Explore the iTunes API with just one click'/>
      <br/>
      <form onSubmit={searchAlbums}>
        <label className="label">
          Search itunes:
          <input type="text" placeholder="Enter an artist's name" value={query}
          onChange={handleQueryChange} className="input"/>
        </label>
        <input type="submit" value="Submit" className="submit-button"/>
      </form>
      <Album albums={albums} loading={loading}/>
    </div>
  )
}

export default App
