import { useTimer } from '@hooks/useTimer.tsx';

interface TimerProps {
  initTime?: number;
}
const Timer = ({ initTime = 5 * 60 }: TimerProps) => {
  const { remainTime, startTimer, resetTimer } = useTimer({ initTime });

  return (
    <div>
      <div>{remainTime}</div>
      <button onClick={startTimer}>시작</button>
      <button onClick={resetTimer}>리셋</button>
    </div>
  );
};

export default Timer;
