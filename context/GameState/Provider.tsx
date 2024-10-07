import { useCallback, useEffect, useState } from "react";
import context from "./index";
import { generateRandomBetween } from "./utils";
import { Props, Range, GameStates } from "./types";
import { Alert } from "react-native";

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

	// 	This useEffect checks if the computer has guessed the number
	useEffect(() => {
		if (pickedNumber !== undefined && computerGuess === pickedNumber) {
			setGameState("end");
		}
	}, [computerGuess, pickedNumber, computerGuesses.length]);

	// This useEffect handles the main game logic which gives "computer" functionality to guess the number
	useEffect(() => {
		if (gameState === "in progress") {
			handleComputerGuess(range);
		}
	}, [range, gameState]);

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
		setEnteredValue(undefined);
	};

	const handleComputerGuess = useCallback(
		(currentRange: Range) => {
			const min = currentRange.higherThan + 1;
			const max = currentRange.lowerThan - 1;

			try {
				const randNum = generateRandomBetween(
					min,
					max,
					computerGuesses
				);

				setComputerGuesses((prev) => [...prev, randNum]);

				setComputerGuess(randNum);
			} catch (error) {
				Alert.alert("Error", (error as Error).message, [
					{
						text: "Okay",
						style: "destructive",
						onPress: resetHandler,
					},
				]);
			}
		},
		[computerGuesses]
	);

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
		console.log(`Clicked lower than. Range:`, {
			...range,
			lowerThan: computerGuess,
		});
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
		console.log(`Clicked higher than. Range:`, {
			...range,
			higherThan: computerGuess,
		});
		// Removed handleComputerGuess call
	};

	const handleNewGame = () => {
		setComputerGuess(0);
		setComputerGuesses([]);
		setPickedNumber(undefined);
		setRange({ higherThan: 1, lowerThan: 99 });
		setGameState("start");
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
				setGameState: (value: GameStates) => setGameState(value),
				handleNewGame: handleNewGame,
			}}
		>
			{children}
		</context.Provider>
	);
};
