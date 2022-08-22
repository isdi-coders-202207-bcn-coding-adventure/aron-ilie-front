const Counter = (): JSX.Element => {
  return (
    <ul>
      <li>
        <div className="time-container">
          <span id="days"></span>
        </div>
        <span>days</span>
      </li>
      <li>
        <div className="time-container">
          <span id="hours"></span>
          <span>hours</span>
        </div>
      </li>
      <li>
        <div className="time-container">
          <span id="minutes"></span>
          <span>minutes</span>
        </div>
      </li>
      <li>
        <div className="time-container">
          <span id="seconds"></span>
          <span>seconds</span>
        </div>
      </li>
    </ul>
  );
};

export default Counter;
