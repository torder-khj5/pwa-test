import { useEffect, useMemo, useRef, useState } from 'react';

interface TimerProps {
  initTime: number;
}
export const useTimer = ({ initTime }: TimerProps) => {
  const [seconds, setSeconds] = useState(initTime);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef<any>(null);

  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning]);

  useEffect(() => {
    if (seconds === 0) {
      alert('타이머 종료!');
      setIsRunning(false);
    }
  }, [seconds]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(initTime);
  };

  const reStartTimer = () => {
    resetTimer();
    startTimer();
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const formatTime = (totalSeconds: number) => {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const remainTime = useMemo(() => formatTime(seconds), [seconds]);

  return {
    remainTime,
    startTimer,
    resetTimer,
    reStartTimer,
    stopTimer,
  };
};
