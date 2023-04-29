import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
/* import data from "./data.json"; */
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import "./Card.css";

const CardPostComponent = ({
  Posts,
  searchName,
  setPostEditado,
  useEffects,
  infoText,
  getById
}) => {
  const [busqueda, setBusqueda] = useState("");

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const filtrar = (terminoBusqueda) => {
    var resultadosBusqueda = searchName.filter((elemento) => {
      if (
        elemento.titulo
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase()) ||
        elemento.contenido
          .toString()
          .toLowerCase()
          .includes(terminoBusqueda.toLowerCase())
      ) {
        return elemento;
      }
    });
    setPostEditado(resultadosBusqueda);
  };

  useEffect(() => {}, [useEffect]);

  return (
    <div className="all">
      <div className="barraTitulo">
        <div className="buscar">
        <div className="texto">
          <h1 className="titulo">{infoText}</h1>
        </div>
          <TextField
            className="search"
            id="outlined-basic"
            variant="outlined"
            label="Search"
            onChange={handleChange}
            value={busqueda}
          />
        </div>
      </div>
      <div class="grid">
        <hr />
        <div class="row responsive casillas">
          {searchName &&
            Posts.map((post) => (
              <div class="col">
                <Card sx={{ maxWidth: "auto" }} className="card">
                  <CardMedia
                    component="img"
                    height="140"
                    image={post.url}
                    alt="404 Img not found"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      <a href="*" className="boton">
                        {post.usuario.nombre}
                      </a>
                      <hr />
                      {post.titulo}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {post.contenido}
                      <br />
                      <br />
                      <hr />
                      {post.usuario.comuna.nombreComuna} -{" "}
                      {post.usuario.comuna.provincia.region.nombreRegion}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Compartir</Button>
                    <Link to={`/publicacion/${post.id}`}><Button size="small">Leer mas</Button></Link>
                  </CardActions>
                </Card>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CardPostComponent;
