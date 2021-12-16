import React from "react";
import { InfoCard } from "./InfoCard";
import onix from "../img/ONIX.jpg";

export const Cards = ({ lista }) => {
  console.log(lista);

  return (
    <div>
      {lista.map((poke) => {
        return (
          <InfoCard
            key={poke.id}
            pokeNombre={poke.name}
            pokeTipo={poke.types[0].type.name}
            pokeImagen={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png`}
          />
        );
      })}
      {/* <InfoCard pokeNombre="Onix" pokeImagen={onix} pokeTipo="roca" />
      <InfoCard pokeNombre="Onix" pokeImagen={onix} pokeTipo="electrico" />
     
      <InfoCard pokeTipo="grass" />
      <InfoCard pokeTipo="fuego" />
      <InfoCard pokeTipo="hielo" />
      <InfoCard pokeTipo="normal" />
      <InfoCard pokeTipo="hielo" />
      <InfoCard pokeTipo="normal" /> */}
    </div>
  );
};
