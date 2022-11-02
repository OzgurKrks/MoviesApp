import React, { useEffect, useState ,useContext} from 'react'
import './App.css'
import i from './img/movie.jpg'
import data from './data.json'
import {Context} from './Context.js'
import {Link} from 'react-router-dom'

function App() {
  const dat = useContext(Context)
  console.log(dat.m[0].name.toLowerCase())
 
  let a = document.getElementsByClassName("fa-regular fa-star")
  console.log(a[0])
  
 
  
  const [x, setX] = useState(true)
  const [c, setC] = useState("fa-regular fa-star")
  const [s,setS] = useState(dat.m)

console.log(dat.m)



  useEffect(() => {
    if (x == true) {
      setC("fa-regular fa-star")
    }
    else if (x == false) {
      setC("fa-solid fa-star")
    }
  }, [x])
  const SelectMovie = (e)=>{
    dat.setM(dat.m.filter((m)=>m.name.indexOf(String(e.target.value.toUpperCase()))!==-1))
    if(e.target.value === ""){
      dat.setM(dat.n)
    }
    
  }

  return (
    <div className='div'>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img width={"100px"} src={i}></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
            <form class="d-flex ms-auto">
              <input style={{"width":"500px"}} onChange={SelectMovie}  class="form-control me-2" type="search" placeholder="Search Movie" aria-label="Search" />
             
            </form>
            <div className="navbar-nav ms-auto">
              <Link to='/add'><a className="nav-link active" aria-current="page" href="/add">Flim ekle</a></Link>
             <Link to='/fav'><a className="nav-link active" aria-current="page" href="#">Favoriler</a></Link> 
             


            </div>
          </div>
        </div>
      </nav>
      <div className='container x'>
        <div className='row'>
         {dat.m.map((m)=>(
          <>
           <div className='col-sm-3 py-4' >
           <div class="card" style={{ "width": "18rem;" }}>
             <img style={{"height":"23rem"}} src={m.img} class="card-img-top" alt="..." />

             <div class="card-body">
               <h5 class="card-title d-flex justify-content-center">{m.name}</h5>
               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
               <div id="footer">

                 <h4>{m.imdb}/10</h4>
                 <button  value={m.name} name={m.imdb} id={m.img}  onClick={(e) => { 
                console.log(e.target.id) 
                dat.setFav([...dat.fav,{name:e.target.value,img:e.target.id,imdb:e.target.name}])
                document.getElementById(m.img).className = "fa-solid fa-star"}} className="fa-regular fa-star"></button>
             
               </div>
             </div>
           </div>
         </div>
         
       
         </>
         ))}

         







        </div>

      </div>

    </div>
  )
}

export default App