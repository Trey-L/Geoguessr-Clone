import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useGameStore } from '../store/gameStore';

export function Timer() {
  const { timeRemaining, updateTimer } = useGameStore();

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemaining > 0) {
        updateTimer();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeRemaining, updateTimer]);

  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;

  return (
    <div className="flex items-center gap-2 text-lg font-semibold">
      <Clock className="w-5 h-5" />
      <span>
        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
}