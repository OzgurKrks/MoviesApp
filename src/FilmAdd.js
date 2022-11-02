import React, { useContext, useEffect, useState } from 'react'
import { Context } from './Context'
import './Film.css'
import {Link} from 'react-router-dom'
import data from './data.json'
import i from './img/movie.jpg'


function FilmAdd() {
    const [ad,setAd] = useState()
    const [url,setUrl] = useState()
    const [im,setIm] = useState()
    const [n,setN] = useState([])
    const dat = useContext(Context)
    const [time,setTime] = useState(0)
   
   let [a,setA] = useState([])
    
    const handler = (e)=>{
        e.preventDefault()
        dat.setM([...dat.m,{name:ad.toUpperCase(),img:url,imdb:im}])
        dat.setN([...dat.m,{name:ad,img:url,imdb:im}])
       
        
    }
    console.log(dat.m)
   
    const btn = ()=>{
        setTimeout(()=>{
            setTime(1)
        },0)
        setTimeout(()=>{
            setTime(0)
        },1500)

    }
   
    return (
        <div id='add1' className='container'>
            {time >0 ? <div class="alert alert-success" role="alert">
  Film başarıyla eklendi...
</div>:<h1></h1>}


            <form onSubmit={handler}>
            <Link to="/">  <img style={{"width":"70px"}} src={i}></img></Link>
          
        
            <div class="mb-3">
                <label  class="form-label">Film adı </label>
                <input onChange={(e)=>{setAd(e.target.value)}} type="text" class="form-control"  placeholder="Film adı" />
            </div>
            <div class="mb-3">
                <label   class="form-label">Film imdb puanı</label>
                <input onChange={(e)=>{setIm(e.target.value)}} type="text" class="form-control" placeholder="Film imdb puanı" />
            </div>
            <div class="mb-3">
                <label  class="form-label">Film resimi</label>
                <input  onChange={(e)=>{setUrl(e.target.value)}} type="text" class="form-control" placeholder="Film resimi" />
            </div>
            <button onClick={btn} className='btn btn-success'>ekle</button>
            </form>
            
        </div>
    )
}

export default FilmAdd