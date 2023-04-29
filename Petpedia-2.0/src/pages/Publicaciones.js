import React, { useState, useEffect } from "react";
import { CardPostComponent, Navbar, FooterComponent } from "../components";
import "./Publicaciones.css";
import { getPostUser, getPostById } from "../services/Post";
/* import TextField from "@mui/material/TextField";
 */

/* import search from "../components"; */

const Publicaciones = () => {
  const [state, setState] = useState([]);
  const [stateSearch, setStateSearch] = useState([]);

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const postBD = await getPostUser();
    setState(postBD);
    setStateSearch(postBD);
  };

  const getById = async(id)=>{
    const postDB = await getPostById(id)
    setState(postDB)
  }

  /* const getComuna = async()=>{
  const ComunaBD = await getAllComuna();
  setStateComuna(ComunaBD)
} */
  /* 
const allNombrePost = async(nombre)=>{
  const postBD = await findAllNombrePost(nombre)
    setState(postBD)
    getPost()
} */

  return (
    <div>
      <Navbar />
      <div class="grilla">
        <CardPostComponent
          setPostEditado={setState}
          Posts={state}
          searchName={stateSearch}
          useEffects={useEffect}
          getById = {getById}
          infoText = "Publicaciones"
        />
      </div>
      <FooterComponent />
    </div>
  );
};

export default Publicaciones;
