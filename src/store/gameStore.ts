import { create } from 'zustand';
import { GameState, Location, Round } from '../types';
import { calculateDistance } from '../utils/distance';
import { getRandomLocation } from '../utils/locations';

interface GameStore extends GameState {
  initializeGame: () => void;
  makeGuess: (location: Location) => void;
  nextRound: () => void;
  updateTimer: () => void;
}

export const useGameStore = create<GameStore>((set, get) => ({
  rounds: [],
  currentRound: 0,
  totalScore: 0,
  isGameOver: false,
  timeRemaining: 180, // 3 minutes in seconds

  initializeGame: () => {
    const initialRounds: Round[] = Array(10)
      .fill(null)
      .map(() => ({
        actualLocation: getRandomLocation(),
      }));

    set({
      rounds: initialRounds,
      currentRound: 0,
      totalScore: 0,
      isGameOver: false,
      timeRemaining: 180,
    });
  },

  makeGuess: (guessedLocation: Location) => {
    const { rounds, currentRound } = get();
    const round = rounds[currentRound];
    const distance = calculateDistance(round.actualLocation, guessedLocation);
    const score = Math.round(5000 * Math.exp(-distance / 2000));

    const updatedRounds = [...rounds];
    updatedRounds[currentRound] = {
      ...round,
      guessedLocation,
      distance,
      score,
      timeSpent: 180 - get().timeRemaining,
    };

    set((state) => ({
      rounds: updatedRounds,
      totalScore: state.totalScore + score,
    }));
  },

  nextRound: () => {
    set((state) => {
      const nextRound = state.currentRound + 1;
      const isGameOver = nextRound >= 10;

      return {
        currentRound: nextRound,
        isGameOver,
        timeRemaining: isGameOver ? 0 : 180,
      };
    });
  },

  updateTimer: () => {
    set((state) => ({
      timeRemaining: Math.max(0, state.timeRemaining - 1),
    }));
  },
}));