import React from "react";
import { StyleSheet, View, ViewStyle } from "react-native";
import Colors from "../../style/colors";

type Props = {
	children: React.ReactNode;
	style?: ViewStyle;
};

const Card: React.FC<Props> = ({ children, style }) => {
	return <View style={{ ...styles.card, ...style }}>{children}</View>;
};

const styles = StyleSheet.create({
	card: {
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
});

export default Card;
