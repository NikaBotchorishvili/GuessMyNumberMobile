import { useFonts } from "expo-font";
import { Provider } from "./context/GameState/Provider";

import { Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import Main from "./screens/Main";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function App() {
	const [loaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	// Function to hide the splash screen
	const onLayoutRootView = useCallback(async () => {
		if (loaded) {
			await SplashScreen.hideAsync(); // Hide splash screen when fonts are loaded
		}
	}, [loaded]);

	useEffect(() => {
		// If the fonts are loaded, hide the splash screen immediately
		if (loaded) {
			onLayoutRootView();
		}
	}, [loaded]);

	if (!loaded) {
		return null; // If fonts are not yet loaded, keep returning null
	}

	return (
		<Provider>
			<Main />
		</Provider>
	);
}
