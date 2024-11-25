import React from "react";
import { Link } from "react-router-dom";

const Card = ({ pokemon }) => { //recibe el objeto pokemon como prop ode ListaPokemon
  const { id, name, image, typeOne, typeTwo } = pokemon;

  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3><Link to={`/pokemon/${id}?name=${name}&image=${image}&typeOne=${typeOne}&typeTwo=${typeTwo}`}>{name}</Link></h3>

    </div>
  );
};

//enlace que lleva la ruta pokemon/id: y los pasa como parametro de consulta a Details
export default Card;
