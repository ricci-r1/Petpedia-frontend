import React, {useCallback} from 'react'
import { useNavigate } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  const navigate = useNavigate();
  const handleOnClick = useCallback(()=>navigate("/login",{},[navigate]));

  return (
    <header>
    <nav class="navbar navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="http://localhost:3000/">
    <img src="https://github.com/Rodkaaaa/Petpedia/blob/main/petpedia/src/main/resources/static/img/LogosPetpediaBlanco-05.png?raw=true" alt="Logo" width="30" height="24" class="align-text-top"/>
        Petpedia</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">

          <a class="nav-link ms-5" href='http://localhost:3000/veterinarias'>Veterinarias</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="http://localhost:3000/publicaciones" >Publicaciones</a>
        </li>
        <li class="nav-item ms-3">
          <a class="nav-link" href="http://localhost:3000/nosotros">Nosotros</a>
        </li>
      </ul>
      <button type="button" class="botoncito" onClick={()=>{handleOnClick()}} >Login</button>
    </div>
  </div>
</nav>
</header>
  )
}

export default Navbar;