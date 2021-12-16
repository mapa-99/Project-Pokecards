import React from "react";
import { Card, PokeDiv, StyledButton } from "../styles/Card";

export const InfoCard = ({ pokeNombre, pokeImagen, pokeTipo }) => {
  return (
    <Card tipo={pokeTipo}>
      <PokeDiv> 
        {!pokeImagen ? (
          " imagen del bicho..."
        ) : (
          <img
            src={pokeImagen}
            width="118"
            height="118"
            style={{
              padding:"2px",
              backgroundColor: "white",
              borderRadius: "50%",
              border: "4px solid black",
              verticalAlign: "middle",
            }}
          />
        )}
      </PokeDiv>
      <h2>{!pokeNombre ? "Nombre del bicho..." : pokeNombre}</h2>
      Tipo del Pokémon: <b>{pokeTipo}</b>
      <br />
      <StyledButton onClick={() => alert("Holi, soy un alert bien mamalón :3")}>
        Más Detalles
      </StyledButton>
    </Card>
  );
};
