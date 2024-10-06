import { createContext, useEffect, useState } from "react";

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
});

export const Provider: React.FC<Props> = ({ children }) => {
	const [enteredValue, setEnteredValue] = useState<number>();
	const [pickedNumber, setPickedNumber] = useState<number>();
	const [computerGuess, setComputerGuess] = useState<number>(0);
	const [computerGuesses, setComputerGuesses] = useState<number[]>([]);
	const [range, setRange] = useState<Range>({
		higherThan: 1,
		lowerThan: 99,
	});
	const [gameState, setGameState] = useState<GameStates>("start");
	useEffect(() => {
		if (pickedNumber !== undefined && computerGuess === pickedNumber) {
			Alert.alert(
				"Computer guessed the number",
				`Computer guessed the number in ${computerGuesses.length} guesses`,
				[{ text: "Okay", style: "destructive", onPress: resetHandler }]
			);
			console.log("Computer guessed the number");
			setGameState("end");
		}
	}, [computerGuess, pickedNumber, computerGuesses.length]);
	const resetHandler = () => {
		setEnteredValue(undefined);
	};

	const confirmHandler = () => {
		if (
			enteredValue === undefined ||
			enteredValue < 1 ||
			enteredValue > 99
		) {
			Alert.alert("Invalid number", "Number has to be between 1 and 99", [
				{ text: "Okay", style: "destructive", onPress: resetHandler },
			]);
			return;
		}

		setPickedNumber(enteredValue);
		setGameState("in progress");
		handleComputerGuess();
	};

	const handleComputerGuess = () => {
		if (computerGuess) {
			setComputerGuesses((prev) => {
				return [...prev, computerGuess];
			});
		}

		setComputerGuess(() => {
			let min = range.higherThan;
			let max = range.lowerThan;

			const randNum = generateRandomBetween(min, max, computerGuesses);

			// Generate the new computer guess within the range [min, max]
			return randNum;
		});
	};

	const handleLowerThan = () => {
		if (!pickedNumber) return;

		if (computerGuess <= pickedNumber) {
			Alert.alert(
				"Cheater",
				"You said the number is lower than the computer guess but the computer guess is higher than your number",
				[{ text: "Okay", style: "destructive", onPress: resetHandler }]
			);
			return;
		}

		setRange((prev) => {
			return { ...prev, lowerThan: computerGuess };
		});
		handleComputerGuess();
	};

	const handleHigherThan = () => {
		if (!pickedNumber) return;

		if (computerGuess >= pickedNumber) {
			Alert.alert(
				"Cheater",
				"You said the number is higher than the computer guess but the computer guess is lower than your number",
				[{ text: "Okay", style: "destructive", onPress: resetHandler }]
			);
			return;
		}
		setRange((prev) => {
			return { ...prev, higherThan: computerGuess };
		});
		handleComputerGuess();
	};

	return (
		<context.Provider
			value={{
				enteredValue: enteredValue?.toString(),
				setEnteredValue: (value: number) => setEnteredValue(value),
				confirmHandler: confirmHandler,
				resetHandler: resetHandler,
				pickedNumber: pickedNumber?.toString(),
				setPickedNumber: (value: number) => setPickedNumber(value),
				computerGuess: computerGuess,
				setComputerGuess: (value: number) => setComputerGuess(value),
				computerGuesses: computerGuesses,
				setComputerGuesses: (value: number[]) =>
					setComputerGuesses(value),
				range: range,
				handleHigherThan: handleHigherThan,
				handleLowerThan: handleLowerThan,
				gameState: gameState,
			}}
		>
			{children}
		</context.Provider>
	);
};

export default context;
