import React, { useContext } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import Colors from "../style/colors";
import Constants from "expo-constants";
import StartGame from "./StartGame";
import Game from "./Game";
import context from "../context/GameState";
import EndGame from "./EndGame";

const Main = () => {
	const { pickedNumber, computerGuess, range, gameState } =
		useContext(context);

	let screen = <StartGame />;

	if (gameState === "in progress") {
		screen = <Game />;
	} else if (gameState === "end") {
		screen = <EndGame />;
	}
	return (
		<LinearGradient
			colors={[Colors.primary, Colors.primaryForeground]}
			style={styles.container}
		>
			<ImageBackground
				source={require("../assets/background.png")}
				style={styles.image}
				imageStyle={styles.imageStyle}
				resizeMode="cover"
			>
				{screen}
				<StatusBar style="dark" />
			</ImageBackground>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: Colors.primary,
	},
	image: {
		flex: 1,
		paddingTop: Constants.statusBarHeight + 50,
	},
	imageStyle: {
		opacity: 0.05,
	},
});

export default Main;
