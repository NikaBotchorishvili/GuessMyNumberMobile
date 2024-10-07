import { createContext, useCallback, useEffect, useState } from "react";

import { Alert } from "react-native";
import { Context, Props, Range, GameStates } from "./types";
import { generateRandomBetween } from "./utils";

const context = createContext<Context>({
	enteredValue: undefined,
	setEnteredValue: () => {},
	pickedNumber: undefined,
	setPickedNumber: () => {},
	confirmHandler: () => {},
	resetHandler: () => {},
	computerGuess: undefined,
	setComputerGuess: () => {},
	computerGuesses: [],
	setComputerGuesses: () => {},
	range: { higherThan: 0, lowerThan: 100 },
	handleHigherThan: () => {},
	handleLowerThan: () => {},
	gameState: "start",
	setGameState: () => {},
	handleNewGame: () => {},
});

export default context;
