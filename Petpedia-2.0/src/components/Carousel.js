import React from "react";
import "./Carousel.css"
import foto1 from "../img/hero001.png"
import foto2 from "../img/hero002.png"
import foto3 from "../img/hero003.png"

const CarouselComponent = () => {
  return (
    <div id="carouselExampleRide" class="carousel slide" data-bs-ride="true">
      <div class="carousel-inner">
        <div class="carousel-item active">
        <img src={foto1} class="d-block w-100" alt="..." ></img>
  <div class="carousel-caption d-none d-md-block">
    <h2>Búsqueda de veterinarias</h2>
    <h5>Según tu comuna de residencia, especialidades y servicios</h5>
  </div>
        </div>
        <div class="carousel-item">
        <img src={foto2} class="d-block w-100" alt="..." ></img>
  <div class="carousel-caption d-none d-md-block">
    <h2>Comparte tus datos</h2>
    <h5>Ayuda a otros usuarios a encontrar datos de esterilización, vacunas, controles veterinarios y más</h5>
  </div>
        </div>
        <div class="carousel-item">
        <img src={foto3} class="d-block w-100" alt="..." ></img>
  <div class="carousel-caption d-none d-md-block">
    <h2>Nos interesa la salud de tu mascota</h2>
    <h5>La más grande red de recintos veterinarios, especialistas en diversas áreas de medicina veterinaria y artículos de interés</h5>
  </div>
  </div>
        </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleRide"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default CarouselComponent;

{
  /* <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2" class="active"></li>
  </ol>
  <div class="carousel-inner active">
    <div class="carousel-item active">
      <img class="d-block w-100" src="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="First slide"/>
    </div>
    <div class="carousel-item active ">
      <img class="d-block w-100" src="https://images.pexels.com/photos/4921291/pexels-photo-4921291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Second slide"/>
    </div>
    <div class="carousel-item active ">
      <img class="d-block w-100" src="https://images.pexels.com/photos/4560155/pexels-photo-4560155.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Third slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselPrev" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselNext" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div> */
}
