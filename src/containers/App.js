import React, { useEffect, useState } from 'react';
import Recipe from '../components/Recipe'
import './App.scss';

const APP_ID = "cec32440"
const KEY_ID = "c59329bb7240bf0b4eea84ae6a800708"

const App = () => {
  const [recipies, setRecipies] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("")
  const [btnClicked, setBtnClicked] = useState(false)
  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${KEY_ID}`



  const getData = async () => {
      const res = await fetch(exampleReq)
      const data = await res.json()
      setRecipies(data.hits)
 
  }
  const searchHandler = (e) => {
    setSearch(e.target.value)
  }
  const getQuery = (e) => {
    e.preventDefault()
    getData()
    setQuery(search)
    setBtnClicked(true)
  }
  let btnHasBeenClicked = null
  if (btnClicked) {
    btnHasBeenClicked = (
      <div className="recipies">
        {recipies.map(recipe => {
          return <Recipe key={recipe.recipe.label} recipe={recipe} />
        })}
      </div>
    )
  }else{
    btnHasBeenClicked = (
      <div className ="search_title">
        <h1>Search your meals!</h1>
      </div>
    )
  }
  return (
    <div className="App">
      <form className="search_form" onSubmit={getQuery}>
        <input type="text" className="search_bar" value={search} onChange={searchHandler} />
        <button type="submit" className="search_btn">Search</button>
      </form>
      {btnHasBeenClicked}
    </div>
  );
}

export default App;
