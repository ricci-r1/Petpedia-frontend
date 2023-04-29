import React, { useState, useEffect } from "react";
import { TarjetaVetComponent, Navbar, FooterComponent, CardPostComponent } from "../components";
import "./Veterinarias.css";
import { getAllPost, getPostVet } from "../services/Post";

const VeterinariasPage = () => {
  const [state, setState] = useState([]);
  const [stateSearch, setStateSearch] = useState("");

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    const postBD = await getPostVet();
    setState(postBD);
    setStateSearch(postBD);
  };

  return (
    <div>
      <Navbar />
      <div class="grilla">
        <CardPostComponent
          setPostEditado={setState}
          Posts={state}
          searchName={stateSearch}
          useEffects={useEffect}
          infoText = "Veterinarias"
        />
      </div>
      <FooterComponent />
    </div>
  );
};
export default VeterinariasPage;
