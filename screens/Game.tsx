import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../style/colors";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import context from "../context/GameState";

const Game = () => {
	const {
		computerGuess,
		computerGuesses,
		handleHigherThan,
		handleLowerThan,
	} = useContext(context);
	return (
		<View style={styles.mainContainer}>
			<Title
				style={{
					width: "100%",
					borderColor: Colors.white,
					color: Colors.white,
				}}
			>
				Opponents Guess
			</Title>
			<Title
				style={{
					width: "90%",
					paddingVertical: 35,
					textAlign: "center",
				}}
			>
				{computerGuess}
			</Title>

			<Card>
				<Text style={styles.header}>Higher or lower?</Text>

				<View style={styles.actionsContainer}>
					<Button
						label="-"
						style={styles.button}
						onPress={handleLowerThan}
					/>
					<Button
						label="+"
						style={styles.button}
						onPress={handleHigherThan}
					/>
				</View>
			</Card>

			{computerGuesses.map((guess, index) => (
				<Card>
					<Text>Computer Guessed {guess}</Text>
				</Card>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		width: "80%",
		marginHorizontal: "auto",
		rowGap: 30,
	},

	header: {
		color: Colors.secondary,
		fontSize: 25,
		letterSpacing: 4,
	},
	actionsContainer: {
		flexDirection: "row",
		gap: 20,
	},
	button: {
		flex: 1,
	},
});

export default Game;
