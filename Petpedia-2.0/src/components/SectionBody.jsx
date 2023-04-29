import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import "./SectionBody.css";

import { CardActionArea } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const SectionBody = () => {
  return (
    <div class="container px-4 text-center position-absolute ">
      <div className="row row-cols-1 row-cols-lg-1 g-1 g-lg-1">
        <div class="col me-3 ps-3 ps-5">
          <div
            class="card"
            style={{
              width: `15rem`,
              height: `22rem`,
            }}
          >
            <img
              src="https://www.linkpicture.com/q/articulo3.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vacunas al día</h5>
              <p class="card-text">
                ¿Sabes precisamente que hace cada vacuna de tu mascota? Los
                avances de la ciencia nos indican grandes descubrimientos en
                materia de medicina veterinaria
              </p>
            </div>
          </div>
        </div>
        <div class="col me-3 ps-3 ps-5">
          <div
            class="card"
            style={{
              width: `15rem`,
              height: `22rem`,
            }}
          >
            <img
              src="https://www.linkpicture.com/q/articulo4.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Dieta BARF</h5>
              <p class="card-text">
                ¿Es realmente la dieta ideal para nuestras mascotas? Descubre
                todos sus beneficios en el siguiente artículo
              </p>
            </div>
          </div>
        </div>
        <div class="col me-3 ps-3 ps-5">
          <div
            class="card"
            style={{
              width: `15rem`,
              height: `22rem`,
            }}
          >
            <img
              src="https://www.linkpicture.com/q/articulo5.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Vida indoor</h5>
              <p class="card-text">
                La importancia de mantener a nuestras mascotas en espacios
                seguros y controlados
              </p>
            </div>
          </div>
        </div>
        <div class="col me-3 ps-6 ps-5">
          <div
            class="card"
            style={{
              width: `15rem`,
              height: `22rem`,
            }}
          >
            <img
              src="https://www.linkpicture.com/q/articulo6.png"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <h5 class="card-title">Tratamiento oncológico</h5>
              <p class="card-text">
                Existen alternativas para prolongar y garantizar la calidad de
                vida de tu mascota
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBody;
