import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  return (
    <CounterStyled>
      <li className="unit-counter-container">
        <div className="counter-number-container">
          <span className="counter-number">02</span>
        </div>
        <span className="counter-letter">days</span>
      </li>
      <li className="unit-counter-container">
        <div className="counter-number-container">
          <span className="counter-number">20</span>
        </div>
        <span className="counter-letter">hours</span>
      </li>
      <li className="unit-counter-container">
        <div className="counter-number-container">
          <span className="counter-number">34</span>
        </div>
        <span className="counter-letter">minutes</span>
      </li>
      <li className="unit-counter-container">
        <div className="counter-number-container">
          <span className="counter-number">09</span>
        </div>
        <span className="counter-letter">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
