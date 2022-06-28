import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";

import { SelectedContent } from "./context/SelectedContent";

function App() {
	return (
		<BrowserRouter>
			<SelectedContent>
				<Routes>
					<Route path="/" element={<AppLayout />}>
						<Route index element={<HomePage />} />
						<Route path="*" element={<Navigate to="/" replace />} />
					</Route>
				</Routes>
			</SelectedContent>
		</BrowserRouter>
	);
}

export default App;
