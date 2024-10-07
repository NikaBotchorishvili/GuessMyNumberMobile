import React, { useContext } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../style/colors";
import context from "../context/GameState";

import Constants from "expo-constants";
import Button from "../components/ui/Button";

const EndGame = () => {
	const { pickedNumber, computerGuesses, handleNewGame } =
		useContext(context);
	return (
		<View style={styles.container}>
			<Title style={{ color: Colors.white, borderColor: Colors.white }}>
				GAME OVER!
			</Title>
			<Image
				style={styles.image}
				source={require("../assets/success.png")}
			/>

			<View style={styles.resultContainer}>
				<Text style={styles.resultText}>
					Your phone needed{" "}
					<Text style={styles.highlightedText}>
						{computerGuesses.length}
					</Text>{" "}
					rounds to guess the number{" "}
					<Text style={styles.highlightedText}>{pickedNumber}</Text>
				</Text>
				<Button
					onPress={handleNewGame}
					disabled={false}
					style={{ alignSelf: "center", paddingHorizontal: 20 }}
				>
					<Text style={styles.buttonText}>Start new game</Text>
				</Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		width: "90%",
		marginHorizontal: "auto",
		rowGap: 30,
		alignItems: "center",
		marginBottom: Constants.statusBarHeight + 50,
	},
	image: {
		height: 300,
		aspectRatio: "1/1",
		borderRadius: 10000,
		borderWidth: 3,
		borderColor: Colors.white,
	},
	resultContainer: {
		rowGap: 40,
	},
	resultText: {
		color: Colors.white,
		fontSize: 25,
		textAlign: "center",
	},
	buttonText: {
		color: Colors.white,
		paddingVertical: 10,
		textAlign: "center",
		justifyContent: "center",
		fontSize: 20,
		letterSpacing: 2,
		fontWeight: "bold",
	},
	highlightedText: {
		color: Colors.secondary,
		fontWeight: "bold",
	},
});

export default EndGame;
