import logo from './logo.svg';
import './App.css';
import Album from "./components/Album"
import React, {useState} from 'react';
import axios from "axios";

function App() {
  let [query, setQuery] = useState("")
  let [albums, setAlbums] = useState({results:[]})

  //When form is submitted, we set the state of albums to the the queried url
  const searchAlbums = async (e) => {
    e.preventDefault();
    //encode uri component - encodes url sensitive characters to utf 8 encoded version of the character
    const url = `https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=album`

    try {
      //pause the function and wait until the axios call is done and put the raw response in data
      const response = await axios.get(url)
      //**filtering the data for I want, data I get vs data I need
      console.log(response.data)
      setAlbums(response.data)
  }
    //if there any issues getting the data, console log the error message
    catch(error) {
      console.error("Error fetching the data, please check the console for more details", error)
    }
    
  }
 
    
  //When the query field changes, update state to be the current value
  const handleQueryChange = (e) => {
    setQuery(e.target.value)
  }

  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <form onSubmit={searchAlbums}>
        <label className="label">
          Search itunes:
          <input type="text" placeholder="Enter an artist's name" value={query}
          onChange={handleQueryChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <div className="album-list">
        {albums.results.map((album) => (
            <Album key={album.collectionId} album={album}/>
          ))}
      </div>
      <ul>
      
      </ul>
    </div>
  );
}

export default App;