export type GameStates = "start" | "in progress" | "end";

export type Context = {
	enteredValue: string | undefined;
	setEnteredValue: (value: number) => void;
	pickedNumber: string | undefined;
	setPickedNumber: (value: number) => void;
	confirmHandler: () => void;
	resetHandler: () => void;
	computerGuess: number | undefined;
	setComputerGuess: (value: number) => void;
	computerGuesses: number[];
	setComputerGuesses: (value: number[]) => void;
	range: Range;
	handleHigherThan: () => void;
	handleLowerThan: () => void;
	gameState: GameStates;
	setGameState: (value: GameStates) => void;
	handleNewGame: () => void;
};

export type Range = {
	lowerThan: number;
	higherThan: number;
};

export type Props = {
	children: React.ReactNode;
};
