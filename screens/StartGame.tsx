import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Button from "../components/ui/Button";
import Colors from "../style/colors";

const StartGame = () => {

	const [enteredValue, setEnteredValue] = useState<number>();
	return (
		<View style={styles.mainContainer}>
			<Text style={styles.headerText}>Guess My Number</Text>

			<View style={styles.startGameContainer}>
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
						label="Reset"
						style={{ flex: 1, alignSelf: "flex-start" }}
						onPress={() => {}}
					/>
					<Button
						label="Confirm"
						style={{ flex: 1, alignSelf: "flex-start" }}
						onPress={() => {}}
					/>
				</View>
			</View>
		</View>
	);
};

export default StartGame;

const styles = StyleSheet.create({
	mainContainer: {
		alignItems: "center",
		rowGap: 30,
	},
	startGameContainer: {
		backgroundColor: Colors.primaryForeground,
		borderRadius: 10,
		paddingVertical: 30,
		alignItems: "center",
		paddingHorizontal: 20,
		rowGap: 20,
		elevation: 10,
		shadowColor: "#fff",
		shadowOffset: {
			height: 2,
			width: 5,
		},
		shadowRadius: 10,
		shadowOpacity: 0.25,
	},
	headerText: {
		fontSize: 30,
		fontWeight: "bold",
		padding: 15,
		borderColor: Colors.secondary,
		borderWidth: 1,
		marginHorizontal: "auto",
		alignSelf: "flex-start",
		color: Colors.secondary,
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
});
