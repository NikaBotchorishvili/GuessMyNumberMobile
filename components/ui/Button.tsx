import {
	Pressable,
	StyleProp,
	StyleSheet,
	Text,
	View,
	ViewStyle,
} from "react-native";
import Colors from "../../style/colors";

type Props = {
	label: string;
	onPress: () => void;
	style?: ViewStyle;
	disabled?: boolean;
};

const Button: React.FC<Props> = ({
	label,
	onPress,
	style,
	disabled = false,
}) => {
	return (
		<Pressable
			onPress={onPress}
			style={({ pressed }) => [
				styles.button,
				pressed && styles.buttonPressed,
				style,
			]}
			disabled={disabled}
		>
			<Text style={styles.buttonText}>{label}</Text>
		</Pressable>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		backgroundColor: Colors.secondary,
		paddingHorizontal: 10,
		paddingVertical: 5,
		fontSize: 30,
		borderRadius: 10,
	},
	buttonText: {
		color: Colors.white,
		fontWeight: "bold",
		fontSize: 25,
		textAlign: "center",
	},
	buttonPressed: {
		opacity: 0.5,
	},
});
