const Counter = (): JSX.Element => {
  return (
    <ul>
      <li>
        <span className="counter-number">02</span>
        <span>days</span>
      </li>
      <li>
        <span className="counter-number">20</span>
        <span>hours</span>
      </li>
      <li>
        <span className="counter-number">34</span>
        <span>minutes</span>
      </li>
      <li>
        <span className="counter-number">09</span>
        <span>seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
