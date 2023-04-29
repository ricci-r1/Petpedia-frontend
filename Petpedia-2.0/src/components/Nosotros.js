  import React from "react";
  import "./Nosotros.css"

  import foto1 from "../img/jav.png"
  import foto2 from "../img/fran.png"
  import foto3 from "../img/fred.png"
  import foto4 from "../img/tam.png"
  import foto5 from "../img/ric.png"
  import foto6 from "../img/g1.png"
  import foto7 from "../img/p1.png"
  import foto8 from "../img/p2.png"
  import foto9 from "../img/in.png"


  const NosotrosComponent = () => {
      return (
          <div class = "container">
        <div class="bg-light">
          <div class="container py-5">
            <div class="row h-100 align-items-center py-5">
              <div class="col-lg-6">
                <h1 class="display-4">Somos Petpedia</h1>
                <p class="lead text-muted mb-0">Nos importa la vida y cuidado de nuestras mascotas y queremos ayudarte a tener una mejor calidad de vida junto a ellos.</p>
                <p class="lead text-muted">
                </p>
              </div>
              <div class="col-lg-6 d-none d-lg-block"><img src={foto6} alt="" class="img-fluid"/></div>
            </div>
          </div>
        </div>
        
        <div class="bg-white py-5">
          <div class="container py-5">
            <div class="row align-items-center mb-5">
              <div class="col-lg-6 order-2 order-lg-1"><i class="fa fa-bar-chart fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Misión</h2>
                <p class="font-italic text-muted mb-4">Somos un grupo de personas con un enfoque social en mente y además, amantes de los animales. Bajo este lineamiento, deseamos aportar entregando una plataforma de ayuda colaborativa con sentido de comunidad y a su vez, una guía que oriente a aquellos que velan por la salud y bienestar de sus mascotas.</p>
              </div>
              <div class="col-lg-5 px-5 mx-auto order-1 order-lg-2"><img src={foto7} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
            </div>
            <div class="row align-items-center">
              <div class="col-lg-5 px-5 mx-auto"><img src={foto8} alt="" class="img-fluid mb-4 mb-lg-0"/></div>
              <div class="col-lg-6"><i class="fa fa-leaf fa-2x mb-3 text-primary"></i>
                <h2 class="font-weight-light">Visión</h2>
                <p class="font-italic text-muted mb-4">Buscamos convertirnos en pioneros en la creación de un espacio que ayude y otorgue soluciones a la comunidad de usuarios dueños de mascotas. ¿Cómo esperamos lograrlo? Haciendo partícipe al usuario, creando una comunidad que se ayude mutuamente y por otro lado, orientarlos con funcionalidades que  simplifiquen la búsqueda de atención veterinaria para sus mascotas, llegando a ser una herramienta influyente e indispensable.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div class="bg-light py-5">
          <div class="container py-5">
            <div class="row mb-4">
              <div class="col-lg-5">
                <h2 class="display-4 font-weight-light">Nuestro equipo</h2>
                <p class="font-italic text-muted">Somos desarrolladores motivados por un fin social y comunitario.</p>
              </div>
            </div>
            
            <div class="row text-center display-flex">
              {/* <!-- Team item--> */}
              <div class="col-xl-2 col-sm-3 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img
              src={foto1} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0">Javier Sepúlveda</h5><span class="small text-uppercase text-muted">Full stack developer</span>
                  <ul class="social mb-0 list-inline mt-3">
                    <li class="list-inline-item"><a href="https://www.linkedin.com/in/javier-ignacio-sep%C3%BAlveda-ojeda-70b000147/" class="social-link"><img alt="Linkedin" width="30" height="30" src={foto9}/></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}
        
              {/* <!-- Team item--> */}
              <div class="col-xl-2 col-sm-3 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img
              src={foto2} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0">Francisca Madariaga</h5><span class="small text-uppercase text-muted">Full stack developer</span>
                  <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/francisca-madariaga/" class="social-link"><img alt="Linkedin" width="30" height="30" src={foto9}/></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}
        
              {/* <!-- Team item--> */}
              <div class="col-xl-2 col-sm-3 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img
              src={foto3} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0">Frederick Cid</h5><br/><span class="small text-uppercase text-muted">Full stack developer</span>
                  <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/fcidg/" class="social-link"><img alt="Linkedin" width="30" height="30" src={foto9}/></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}
        
            {/*  <!-- Team item--> */}
              <div class="col-xl-2 col-sm-3 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4"><img 
                src={foto4} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0">Tamara Verdugo</h5><br/><span class="small text-uppercase text-muted">Full stack developer</span>
                  <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/tamara-verdugo-vivallos/" class="social-link"><img alt="Linkedin" width="30" height="30" src={foto9}/></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}

            {/*  <!-- Team item--> */}
            <div class="col-xl-2 col-sm-3 mb-5">
                <div class="bg-white rounded shadow-sm py-5 px-4">
                  <img src={foto5} alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                  <h5 class="mb-0">Ricardo Carrizo</h5>
                  <br/>
                  <span class="small text-uppercase text-muted">Full stack developer</span>
                  <ul class="social mb-0 list-inline mt-3">
                  <li class="list-inline-item"><a href="https://www.linkedin.com/in/ricardo-carrizo-236041258/" class="social-link"><img alt="Linkedin" width="30" height="30" src={foto9}/></a></li>
                  </ul>
                </div>
              </div>
              {/* <!-- End--> */}
        
            </div>
          </div>
        </div>
        </div>
      );
    };
    
    export default NosotrosComponent;