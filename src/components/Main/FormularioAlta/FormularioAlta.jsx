import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { PokemonContext } from "../../../context/pokemonContext";

const FormularioAlta = () => {
  const { addPokemon } = useContext(PokemonContext);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    addPokemon(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("id", { required: true })} placeholder="ID" type="number" />
      {errors.id && <span>ID is required</span>}

      <input {...register("name", { required: true, minLength: 3 })} placeholder="Name" type="text" />
      {errors.name && <span>Name must be at least 3 characters</span>}

      <input {...register("image", { required: true })} placeholder="Image URL" type="text" />
      {errors.image && <span>Image is required</span>}

      <select {...register("typeOne", { required: true })}>
        <option value="">Select Type 1</option>
        <option value="fire">Fire</option>
        <option value="water">Water</option>
      </select>
      {errors.typeOne && <span>Type 1 is required</span>}

      <select {...register("typeTwo")}>
        <option value="">Select Type 2</option>
        <option value="grass">Grass</option>
        <option value="electric">Electric</option>
      </select>

      <button type="submit">Add Pokémon</button>
    </form>
  );
};

export default FormularioAlta;
