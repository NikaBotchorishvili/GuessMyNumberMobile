import { Provider } from "./context/GameState";

import Main from "./screens/Main";
export default function App() {
	return (
		<Provider>
			<Main />
		</Provider>
	);
}
