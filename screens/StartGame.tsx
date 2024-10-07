import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/ui/Button";
import Colors from "../style/colors";
import { useContext } from "react";
import context from "../context/GameState";
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";

const StartGame = () => {
	const { enteredValue, setEnteredValue, confirmHandler, resetHandler } =
		useContext(context);
	return (
		<View style={styles.mainContainer}>
			<Title>Guess my number</Title>
			<Card>
				<View style={styles.inputContainer}>
					<Text style={styles.inputLabel}>Enter a number</Text>
					<TextInput
						style={styles.input}
						keyboardType="number-pad"
						value={enteredValue?.toString()}
						onChangeText={(text) => setEnteredValue(parseInt(text))}
						maxLength={2}
					/>
				</View>

				<View style={styles.actionsContainer}>
					<Button
						style={{ flex: 1, alignSelf: "flex-start" }}
						onPress={resetHandler}
					>
						<Text style={styles.buttonText}>Reset</Text>
					</Button>
					<Button
						style={{ flex: 1, alignSelf: "flex-start" }}
						onPress={confirmHandler}
					>
						<Text style={styles.buttonText}>Confirm</Text>
					</Button>
				</View>
			</Card>
		</View>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: "center",
		rowGap: 30,
	},
	actionsContainer: {
		flexDirection: "row",

		width: "70%",
		marginHorizontal: "auto",
		columnGap: 10,
	},
	inputLabel: {
		color: Colors.secondary,
		fontSize: 25,
		fontWeight: "bold",
	},
	input: {
		borderColor: Colors.secondary,
		borderBottomWidth: 1,
		width: 60,
		color: Colors.textPrimary,
		alignItems: "center",
		justifyContent: "center",
		textAlign: "center",
		fontSize: 25,
	},
	inputContainer: {
		alignItems: "center",
	},
	buttonText: {
		color: Colors.white,
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
	},
});
