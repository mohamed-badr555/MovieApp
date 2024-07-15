import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar({curruser,remove}) {
   const navigate= useNavigate()
  function logout(){
 let check=   window.confirm("are you sure to logout");
 if(check){
  
   remove();
   navigate('/login')
 }
  }
  return <div>
 <nav class="navbar navbar-expand-lg navbar-dark">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/home">NOXE</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/movies">Movies</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/tv">TV Show</Link>
        </li>
        
      </ul>
         {/* remove links if he not login => APi Error */}
      {/* {curruser?  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/movies">Movies</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/tv">TV Show</Link>
        </li>
      
       
   
      </ul>:''} */}
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center">
      <li class="nav-item">
         <i className='fa-brands me-3 fa-facebook-f'></i>
         <i className='fa-brands me-3 fa-instagram'></i>
         <i className='fa-brands me-3 fa-spotify '></i>
         <i className='fa-brands me-3 fa-twitter '></i>
        </li>
      <li class="nav-item">
          <Link class="nav-link" to="/register">Register</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/login">Login</Link>
        </li>
        
             {/* to check user login show logout if no show login and register  and remove user from token and set logged null*/}
       {/* {curruser?   <li className="nav-item">
          <span className="nav-link" onClick={logout}>Logout</span>
        </li>: <div>
        <li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="register">Register</Link>
        </li>
        </div> } */}

      </ul>
      
    </div>
  </div>
</nav>
  </div>
}
