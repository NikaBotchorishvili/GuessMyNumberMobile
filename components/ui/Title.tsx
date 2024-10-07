import React from "react";
import { StyleSheet, Text, TextStyle } from "react-native";
import Colors from "../../style/colors";

type Props = {
	children: React.ReactNode;
	style?: TextStyle;
};

const Title: React.FC<Props> = ({ children, style }) => {
	return <Text style={[styles.title, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
	title: {
		fontSize: 30,
		padding: 15,
		borderColor: Colors.secondary,
		borderWidth: 1,
		marginHorizontal: "auto",
		alignSelf: "flex-start",
		color: Colors.secondary,
	},
});
export default Title;
