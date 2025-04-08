import React, { useEffect } from 'react';
import { useGameStore } from './store/gameStore';
import { StreetView } from './components/StreetView';
import { WorldMap } from './components/WorldMap';
import { Timer } from './components/Timer';
import { RoundSummary } from './components/RoundSummary';
import { GameOver } from './components/GameOver';
import { Location } from './types';

function App() {
  const {
    rounds,
    currentRound,
    totalScore,
    isGameOver,
    initializeGame,
    makeGuess,
    nextRound,
  } = useGameStore();

  useEffect(() => {
    initializeGame();
  }, [initializeGame]);

  const currentRoundData = rounds[currentRound];
  const hasGuessed = currentRoundData?.guessedLocation;

  const handleGuess = (location: Location) => {
    makeGuess(location);
  };

  if (isGameOver) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        <GameOver
          rounds={rounds}
          totalScore={totalScore}
          onRestart={initializeGame}
        />
      </div>
    );
  }

  if (!currentRoundData) {
    return <div className="min-h-screen bg-gray-100 p-4">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-6xl mx-auto space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center mb-4">
            <div className="space-x-4">
              <span className="font-semibold">Round {currentRound + 1}/10</span>
              <span className="font-semibold">Score: {totalScore}</span>
            </div>
            <Timer />
          </div>

          {!hasGuessed ? (
            currentRoundData && (
              <StreetView location={currentRoundData.actualLocation} />
            )
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <RoundSummary
                round={currentRoundData}
                onNextRound={nextRound}
              />
              <WorldMap
                onLocationSelect={() => {}}
                isGuessing={false}
                actualLocation={currentRoundData.actualLocation}
                guessedLocation={currentRoundData.guessedLocation}
              />
            </div>
          )}

          {!hasGuessed && (
            <div className="mt-4">
              <WorldMap
                onLocationSelect={handleGuess}
                isGuessing={true}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;