import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import KeyDate from "../../utils/KeyDate";
import CounterStyled from "./CounterStyled";

const Counter = (): JSX.Element => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      const now: Moment = moment();
      const then: Moment = moment(KeyDate, "YYYY-MM-DD hh:mm:ss");
      const countdown: any = moment((then as any) - (now as any));

      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  return (
    <CounterStyled className="counter">
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">{days}</span>
        </div>
        <span className="counter__letter">days</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">{hours}</span>
        </div>
        <span className="counter__letter">hours</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">{minutes}</span>
        </div>
        <span className="counter__letter">minutes</span>
      </li>
      <li className="counter__unit-container">
        <div className="counter__number-container">
          <span className="counter__number">{seconds}</span>
        </div>
        <span className="counter__letter">seconds</span>
      </li>
    </CounterStyled>
  );
};

export default Counter;
