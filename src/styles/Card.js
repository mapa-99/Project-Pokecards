import styled from "styled-components";
import react from "react";

export const Card = styled.div`
  background-color: ${(props) => {
    switch (props.tipo) {
      case "iron":
        return `#588A9B`;
      case "water":
        return `#4E91D6`;
      case "fire":
        return `#FF9E53`;
      case "ice":
        return `#74CFC0`;
      case "normal":
        return `#939BA3`;
      case "grass":
        return `#63BC5B`;
      case "rock":
        return `#C6B88C`;
      case "electric":
        return `#F4D339`;
      case "poison":
        return `#AB6AC9`;
      case "psychic":
        return `#F9727A`;
      case "ghost":
        return `#5066A3`;
      case "fairy":
        return `#EC90E7`;
      case "bug":
        return `#92C12A`;
      case "dragon":
        return `#036DC3`;
      case "ground":
        return `#D97942`;
      case "fight":
        return `#CE3E6A`;
    }
  }};
  box-shadow: 3px 3px 5px;
  border: 3px solid #356abc;
  border-radius: 20px;
  display: inline-flex;
  flex-direction: column;
  padding: 1.2rem;
  margin: 1.2rem;
  width: 200px;
`;
export const StyledButton = styled.button`
  background-color: #5aa82f;
  color: #ffcd00;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  padding: 0.9rem;

  &:hover {
    transform: scale(1.1);
    box-shadow: 3px 3px 5px;
  }
`;

export const PokeDiv = styled.div`
  align-self: center;
  background-image: linear-gradient(red, black 50%, white);
  border: 1px solid gray;
  border-radius: 50%;
  height: 130px;
  padding: 1.2rem;
  width: 130px;
`;

//snipet imsc	import styled from 'styled-components';
