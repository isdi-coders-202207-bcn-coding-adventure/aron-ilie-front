const Counter = (): JSX.Element => {
  return (
    <ul>
      <li>
        <span className="days"></span>
        <span>days</span>
      </li>
      <li>
        <span className="hours"></span>
        <span>hours</span>
      </li>
      <li>
        <span className="minutes"></span>
        <span>minutes</span>
      </li>
      <li>
        <span className="seconds"></span>
        <span>seconds</span>
      </li>
    </ul>
  );
};

export default Counter;
