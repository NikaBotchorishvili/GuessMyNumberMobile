import { useEffect, useState, useRef } from "react";
import { View, Animated, StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

// Function to generate random properties for each confetti piece
const generateConfettiPiece = () => ({
	x: Math.random() * width,
	size: Math.random() * 15 + 5,
	color: `hsl(${Math.random() * 360}, 100%, 50%)`,
	delay: Math.random() * 500, // Delay for the start of the animation
	speed: Math.random() * 4000 + 2000, // Random speed for animation duration
});

const ConfettiPiece = ({ onComplete }: { onComplete: () => void }) => {
	const translateY = useRef(new Animated.Value(-50)).current;
	const translateX = useRef(new Animated.Value(0)).current;
	const rotate = useRef(new Animated.Value(0)).current;

	// Initialize confetti piece properties
	const confettiProps = useRef(generateConfettiPiece()).current;

	useEffect(() => {
		// Y-axis animation
		Animated.timing(translateY, {
			toValue: height + 50,
			duration: confettiProps.speed,
			delay: confettiProps.delay,
			useNativeDriver: true,
		}).start(({ finished }) => {
			if (finished) {
				// Notify parent when the animation is complete
				onComplete();
			}
		});

		// X-axis (horizontal movement)
		Animated.loop(
			Animated.sequence([
				Animated.timing(translateX, {
					toValue: confettiProps.x + 30,
					duration: confettiProps.speed / 2,
					useNativeDriver: true,
				}),
				Animated.timing(translateX, {
					toValue: confettiProps.x - 30,
					duration: confettiProps.speed / 2,
					useNativeDriver: true,
				}),
			])
		).start();

		// Rotation animation
		Animated.loop(
			Animated.timing(rotate, {
				toValue: 1,
				duration: confettiProps.speed,
				useNativeDriver: true,
			})
		).start();
	}, [confettiProps, translateY, translateX, rotate]);

	// Interpolating rotation
	const rotateInterpolate = rotate.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "360deg"],
	});

	return (
		<Animated.View
			style={[
				styles.confetti,
				{
					backgroundColor: confettiProps.color,
					width: confettiProps.size,
					height: confettiProps.size,
					transform: [
						{ translateX },
						{ translateY },
						{ rotate: rotateInterpolate },
					],
				},
			]}
		/>
	);
};

const Confetti = ({ count }: { count: number }) => {
	const [confettiArray, setConfettiArray] = useState(
		Array.from({ length: count }, (_, index) => index)
	);

	// Function to handle when a confetti piece animation ends
	const handleComplete = (id: number) => {
		setConfettiArray((prev) =>
			prev.filter((confettiId) => confettiId !== id)
		);
	};

	return (
		<View style={styles.container}>
			{confettiArray.map((id) => (
				<ConfettiPiece key={id} onComplete={() => handleComplete(id)} />
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		...StyleSheet.absoluteFillObject,
		overflow: "hidden",
	},
	confetti: {
		position: "absolute",
		borderRadius: 2,
	},
});

export default Confetti;
