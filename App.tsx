import { StatusBar } from "expo-status-bar";
import { ImageBackground, StyleSheet } from "react-native";
import Constants from "expo-constants";
import StartGame from "./screens/StartGame";
import Colors from "./style/colors";
import { LinearGradient } from "expo-linear-gradient";
export default function App() {
	return (
		<LinearGradient
			colors={[Colors.primary, Colors.primaryForeground]}
			style={styles.container}
		>
			<ImageBackground
				source={require("./assets/background.png")}
				style={styles.image}
				imageStyle={styles.imageStyle}
				resizeMode="cover"
			>
				<StartGame />
				<StatusBar style="dark" />
			</ImageBackground>
		</LinearGradient>
	);
}

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
	}
});
