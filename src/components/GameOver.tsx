import React from 'react';
import { Trophy, RefreshCw } from 'lucide-react';
import { Round } from '../types';

interface GameOverProps {
  rounds: Round[];
  totalScore: number;
  onRestart: () => void;
}

export function GameOver({ rounds, totalScore, onRestart }: GameOverProps) {
  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">Game Over!</h1>
      
      <div className="flex justify-center items-center gap-3 mb-8">
        <Trophy className="w-8 h-8 text-yellow-500" />
        <span className="text-2xl font-bold">Total Score: {totalScore}</span>
      </div>

      <div className="space-y-4 mb-8">
        {rounds.map((round, index) => (
          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded">
            <span>Round {index + 1}</span>
            <span>{round.distance?.toFixed(2)} km</span>
            <span className="font-semibold">{round.score} points</span>
          </div>
        ))}
      </div>

      <button
        onClick={onRestart}
        className="w-full flex justify-center items-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <RefreshCw className="w-5 h-5" />
        Play Again
      </button>
    </div>
  );
}