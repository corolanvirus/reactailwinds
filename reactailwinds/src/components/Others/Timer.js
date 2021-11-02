import React from 'react';
import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp }) {
  const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
  } = useTimer({ expiryTimestamp, onExpire: () => console.warn('onExpire called') });


  return (
    <div style={{textAlign: 'center'}}>
      <p>Sortie de la v1 </p>
      <div style={{fontSize: '25px'}}>
        <span>{days}&nbsp;J&nbsp;</span>:&nbsp;<span>{hours}&nbsp;H&nbsp;</span>:&nbsp;<span>{minutes}&nbsp;M&nbsp;</span>:&nbsp;<span>{seconds}&nbsp;S&nbsp;</span>
      </div>
    </div>
  );
}

export default function App() {
  const time = new Date();
  time.setSeconds(time.getHours() + 2628000); // 1 month
  return (
    <div>
      <MyTimer expiryTimestamp={time} />
    </div>
  );
}