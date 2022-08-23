import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  return (
    <CounterStyled className="counter">
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">02</span>
        </div>
        <span className="counter__letter">days</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">20</span>
        </div>
        <span className="counter__letter">hours</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">34</span>
        </div>
        <span className="counter__letter">minutes</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">09</span>
        </div>
        <span className="counter__letter">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
