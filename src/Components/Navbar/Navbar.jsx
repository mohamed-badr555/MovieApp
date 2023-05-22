import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({currentUser}) {
  return <>
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
        
      </ul>
      
    </div>
  </div>
</nav>
  </>
}
