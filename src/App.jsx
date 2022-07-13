import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { SelectedContent } from "./context/SelectedContent";

import AppLayout from "./layout/AppLayout";
import HomePage from "./pages/HomePage";

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
