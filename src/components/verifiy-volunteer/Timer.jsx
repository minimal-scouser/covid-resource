import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timerDiv">Too lale...</div>;
  }

  return (
    <div className="timerDiv">
      <div className="text">Refresh in</div>
      <div className="value">{remainingTime}</div>
      <div className="text">seconds</div>
    </div>
  );
};

const Timer = () => (
  <CountdownCircleTimer
    isPlaying
    duration={100}
    colors={[
      //     ['#033a01', 0.33],
      //   ['#004777', 0.33],
      ["#F7B801", 0.33],
      ["#A30000", 0.33],
    ]}
    size={100}
    strokeWidth={5}
    isLinearGradient={true}
    // ariaLabel={"Hello"}
  >
    {renderTime}
  </CountdownCircleTimer>
);

export default Timer;
