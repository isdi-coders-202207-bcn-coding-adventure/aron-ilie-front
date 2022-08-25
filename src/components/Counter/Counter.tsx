import moment, { Moment } from "moment";
import { useEffect, useState } from "react";
import KeyDate from "../../utils/KeyDate";
import CounterStyled from "./CounterStyled";
import "moment/locale/pt-br";

const Counter = (): JSX.Element => {
  const [days, setDays] = useState<string | number>(0);
  const [hours, setHours] = useState<string | number>(0);
  const [minutes, setMinutes] = useState<string | number>(0);
  const [seconds, setSeconds] = useState<string | number>(0);

  const date = moment(KeyDate.toString());

  useEffect(() => {
    setInterval(() => {
      const now: Moment = moment();
      const then: Moment = moment(date, "YYYY-MM-DD hh:mm:ss");

      const countdown: Moment = moment(+then - +now);

      setDays(countdown.format("D"));
      setHours(countdown.format("HH"));
      setMinutes(countdown.format("mm"));
      setSeconds(countdown.format("ss"));
    }, 1000);
  }, []);

  return (
    <CounterStyled className="counter-container">
      <ul className="counter">
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
      </ul>
    </CounterStyled>
  );
};

export default Counter;
