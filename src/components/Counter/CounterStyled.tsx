import styled from "styled-components";

const CounterStyled = styled.ul`
  min-width: 50%;
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: oxanium;

  .counter-number-container {
    max-width: 50px;
    background-color: #fac204;
    margin: 0 auto;
    padding: 1.5em;
    border-radius: 1em;
    color: #243444;
  }

  .counter-number {
    font-size: 2em;
  }

  .unit-counter-container {
    display: flex;
    flex-direction: column;
  }

  .counter-letter {
    color: #fff;
    text-align: center;
  }
`;

export default CounterStyled;
