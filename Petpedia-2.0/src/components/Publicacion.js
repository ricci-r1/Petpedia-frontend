import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Publicacion.css";
import Rating from "./Rating";

const Publicacion = ({ /* Posts,  */ search, getById }) => {
  const { id } = useParams();

  const [datos, setDatos] = useState([]);

  const obtenerDatos = async () => {
    const res = await axios.get(`http://localhost:8080/post/getId/${id}`);
    /* const posts = data.json() */
    setDatos(res.data);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  /* console.log(publicacionDatos); */

  /* const post = Posts.find(post => post.id === id ) */
  /*  console.log(id) */
  return (
    <div class="publicacion">
      <div className="contenedor-testimonio">
        <img
          className="imagen-testimonio"
          src={datos.url}
          alt="Foto de Cori"
        />

        <div className="contenedorTextoTestimonio">
          <br></br>
          <br></br>
          <p className="tituloTestimonio">{datos.titulo} </p>

          <Rating />
          <p className="textoTestimonio">{datos.contenido}</p>
          <p className="comuna"></p> <p className="direccion"></p>
          <br></br>
          <button type="button" class="btn btn-outline-warning">
            #Adopción
          </button>
          <button type="button" class="btn btn-outline-warning">
            #Gatitos
          </button>
          <button type="button" class="btn btn-outline-warning">
            #Ñuñoa
          </button>
          <br></br>
          <br></br>
          <button type="button" class="btn btn-outline-warning">
            #Mascotas
          </button>

          <button type="button" class="btn btn-outline-warning">
            #Wawitas
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publicacion;
