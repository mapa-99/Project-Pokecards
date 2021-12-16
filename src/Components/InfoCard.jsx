import React from "react";
import { Card, PokeDiv, StyledButton } from "../styles/Card";

export const InfoCard = ({ pokeNombre, pokeImagen, pokeTipo }) => {
  console.log(pokeImagen);
  return (
    <Card tipo={pokeTipo}>
      <PokeDiv
       
      >
        {!pokeImagen ? (
          " imagen del bicho..."
        ) : (
          <img
            src={pokeImagen}
            width="120"
            height="120"
            style={{
              borderRadius: "50%",
              border: "4px solid black",
              verticalAlign: "middle",
            }}
          />
        )}
      </PokeDiv>

      <h3>{!pokeNombre ? "Nombre del bicho..." : pokeNombre}</h3>
      <p>
        Tipo del Pokémon: <b>{pokeTipo}</b>
      </p>
      <StyledButton onClick={() => alert("Holi, soy un alert bien mamalón :3")}>
        Más Detalles
      </StyledButton>
    </Card>
  );
};
