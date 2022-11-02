import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import i from './img/movie.jpg'
import {Context} from './Context.js'
import './App.css'

function Favor() {
    const dat = useContext(Context)
    console.log(dat.fav)
  return (
    <div className='div'>
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
      <div className="container-fluid">
        <Link to='/'><a className="navbar-brand" href="#"><img width={"100px"} src={i} ></img></a></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
          <form class="d-flex ms-auto">
           
       
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
       
   
           {dat.fav ? dat.fav.map((m)=>(
            <>
            <div className='col-sm-3 py-4' >
            <div class="card" style={{ "width": "18rem;" }}>
              <img style={{"height":"23rem"}} src={m.img}  class="card-img-top" alt="..." />
   
              <div class="card-body">
                <h5 class="card-title d-flex justify-content-center">{m.name}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <div id="footer">
   
                  <h4>{m.imdb}/10</h4>
                  <button className='btn btn-danger' value={m.name} onClick={(e)=>{dat.setFav(dat.fav.filter((m)=>m.name !== e.target.value))}}>Sil</button>
               
                </div>
              </div>
            </div>
          </div>
          
        
          </>
          )):<div className='div3'>sa</div>}
 

       







      </div>

    </div>

  </div>
  )
}

export default Favor