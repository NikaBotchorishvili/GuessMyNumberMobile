import { Provider } from "./context/GameState/Provider";

import Main from "./screens/Main";
export default function App() {
	return (
		<Provider>
			<Main />
		</Provider>
	);
}
