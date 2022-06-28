import { createContext, useState } from "react";

const SelectedContext = createContext();

export const SelectedContent = ({ children }) => {
	const [selectedContent, setSelectedContent] = useState("whoami");

	return (
		<SelectedContext.Provider
			value={{
				selectedContent,
				setSelectedContent,
			}}
		>
			{children}
		</SelectedContext.Provider>
	);
};

export default SelectedContext;
