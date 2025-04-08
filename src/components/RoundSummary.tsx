import React from 'react';
import { MapPin, Trophy } from 'lucide-react';
import { Round } from '../types';

interface RoundSummaryProps {
  round: Round;
  onNextRound: () => void;
}

export function RoundSummary({ round, onNextRound }: RoundSummaryProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Round Summary</h2>
      
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-red-500" />
          <span>Distance: {round.distance?.toFixed(2)} km</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-500" />
          <span>Points: {round.score}</span>
        </div>
        
        <div className="text-sm text-gray-600">
          Time taken: {round.timeSpent} seconds
        </div>
      </div>

      <button
        onClick={onNextRound}
        className="mt-6 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Next Round
      </button>
    </div>
  );
}