import React,{useCallback} from "react";
import {
  CarouselComponent,
  Navbar,
  SectionBody,
  FooterComponent,
} from "../components";
import "./Home.css";
import estadis from "../img/estadisticas01.png"
import lastpubli from "../img/publicaciones001.png"

const Home = () => {
  return (
    <div className="all">
      <Navbar />
      
      <div className="carousel"> 
      <CarouselComponent/>
      </div>

      <div className="estadisticas">
      <img
            src={estadis}
            class="d-block w-100"
            alt="..."
          />
      </div>

      <div className="ultimasPublicaciones">
      <img
            src={lastpubli}
            class="d-block w-100"
            alt="..."
          />
      </div>
      
      <div className="completeSection responsive">
        <div className="texto">
          <h2 className="tituloSection">Artículos de interés </h2>
          <p className="textSection">
            Los especialistas nos entregan todo su conocimiento
          </p>
        </div>



        <div className="section ">
          <SectionBody />
        </div>
      </div>
      <FooterComponent />
    </div>
  );
};

export default Home;
