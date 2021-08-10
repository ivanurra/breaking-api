import React from "react";
import styled from "@emotion/styled";

const Quote = styled.p`
    font-size: 2rem;
    color: white;
    margin-top: 10px;
`;

const Frase = ({ frase }) => {
  return (
    <div>
      <Quote>"{frase.quote}"</Quote>
      <Quote>--{frase.author}</Quote>
    </div>
  );
};

export default Frase;
