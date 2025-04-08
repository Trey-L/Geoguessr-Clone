export interface Location {
  lat: number;
  lng: number;
}

export interface Round {
  actualLocation: Location;
  guessedLocation?: Location;
  distance?: number;
  score?: number;
  timeSpent?: number;
}

export interface GameState {
  rounds: Round[];
  currentRound: number;
  totalScore: number;
  isGameOver: boolean;
  timeRemaining: number;
}