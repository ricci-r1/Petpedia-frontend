import React from "react";
import {
  Navbar,
  FooterComponent,
  NosotrosComponent,
} from "../components";
import "./NosotrosPage.css";

const NosotrosPage = () => {
  return (
    <div>
    {/* <h1>Hola</h1> */}
      <Navbar />
      <div>
      <NosotrosComponent/>
      </div>
      <br />
      <br />

      <div>
      <FooterComponent />
      </div>
    </div>
  );
};

export default NosotrosPage;
