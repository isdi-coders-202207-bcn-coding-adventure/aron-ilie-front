import styled from "styled-components";

const CounterStyled = styled.ul`
  min-width: 50%;
  display: flex;
  flex-direction: row;
  gap: 2em;
  font-family: oxanium;

  .counter {
    &__number-container {
      max-width: 50px;
      background-color: #fac204;
      margin: 0 auto;
      padding: 1.5em;
      border-radius: 1em;
      color: #243444;
    }

    &__number {
      font-size: 2em;
    }

    &__unit-container {
      display: flex;
      flex-direction: column;
      list-style: none;
    }

    &__letter {
      color: #fff;
      text-align: center;
    }
  }
`;

export default CounterStyled;
