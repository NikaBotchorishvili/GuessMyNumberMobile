import React, { useContext } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../style/colors";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import context from "../context/GameState";
import Ionicons from "@expo/vector-icons/Ionicons";

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
					<Button style={styles.button} onPress={handleLowerThan}>
						<Ionicons
							style={{ textAlign: "center" }}
							name="remove-circle"
							size={24}
							color="white"
						/>
					</Button>
					<Button style={styles.button} onPress={handleHigherThan}>
						<Ionicons
							style={{ textAlign: "center" }}
							name="add-circle"
							size={24}
							color="white"
						/>
					</Button>
				</View>
			</Card>
			<FlatList
				style={{ gap: 20 }}
				ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
				renderItem={({ item }) => (
					<Card>
						<Text style={styles.guessText}>
							Computer Guessed {item}
						</Text>
					</Card>
				)}
				data={computerGuesses}
			/>
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
	guessText: {
		color: Colors.white,
		fontSize: 20,
		textAlign: "center",
	},
});

export default Game;
