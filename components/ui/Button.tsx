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
	children: React.ReactNode;
	onPress: () => void;
	style?: ViewStyle;
	disabled?: boolean;
};

const Button: React.FC<Props> = ({
	children,
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
			{children}
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

	buttonPressed: {
		opacity: 0.5,
	},
});
