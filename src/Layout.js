import React, { useState } from 'react'
import {Route,Routes} from 'react-router-dom'
import App from './App'
import FilmAdd from './FilmAdd'
import {Context} from './Context.js'
import data from './data.json'
import Favor from './Favor'

function Layout() {
  const [m,setM] = useState(data.movies)
  const [n,setN] = useState(data.movies)
  const [fav,setFav] = useState([])
  const value = {
    m,setM,n,setN,fav,setFav
  }
  return (
    <Context.Provider value={value} >
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/add' element={<FilmAdd/>}/>
        <Route path='/fav' element={<Favor/>}/>
    </Routes>
    </Context.Provider>
  )
}

export default Layout