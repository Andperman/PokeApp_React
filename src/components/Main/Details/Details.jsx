//mostrar detalles especificos del pokemon
import React from "react";
import { useLocation } from "react-router-dom";

const Details = () => {
  const { search } = useLocation(); 
  const params = new URLSearchParams(search);  //extrae los parametros de la URL
//recibe los datos de Card y los pinta
  return (
    <div className="pokemon-details">
      <h2>{params.get("name")}</h2>
      <img src={params.get("image")} alt={params.get("name")} />
      <p>Type 1: {params.get("typeOne")}</p>
      {params.get("typeTwo") && <p>Type 2: {params.get("typeTwo")}</p>}

    </div>
  );
};

export default Details;
