import React, {  useEffect, useState } from "react";
import { getAllPost, findAllNombrePost } from "../services/Post";
import { Publicacion, Navbar, FooterComponent, ComentarioComponent } from "../components";


 import "./PubliPage.css";

// const post = [{
//   url: "",
//   titulo: "",
//   contenido: ""
// }]

const PubliPage = () => {

  const [state, setState] = useState([]);

  useEffect(()=>{
    getPost();
  },[])

  const getPost = async()=>{
    const postBD = await getAllPost();
    setState(postBD);
  }

  const allNombrePost = async(nombre)=>{
    const postBD = await findAllNombrePost(nombre);
    setState(postBD)
    getPost();
  }

 /*  const getById = async(id)=>{
    const postDB = await getPostById(id)
    setState(postDB)
  } */


  return (
    <div>
      <Navbar />
      <div class="grilla">
      <Publicacion Posts={state} search = {allNombrePost}  />
      </div>
      <div>
      <ComentarioComponent/>
      </div>
      <div>
      <FooterComponent />
      </div>
    </div>

    
  );
};

export default PubliPage;