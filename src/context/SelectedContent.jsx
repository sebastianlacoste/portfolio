import { createContext, useState, useEffect } from "react";

const SelectedContext = createContext();

export const SelectedContent = ({ children }) => {
	const contents = ["Projects", "whoami", "Contact"];
	const [selectedContent, setSelectedContent] = useState("whoami");

	useEffect(() => {
		console.log("SELECTED CONTENT: " + selectedContent);
	}, [selectedContent]);

	return (
		<SelectedContext.Provider
			value={{
				contents,
				selectedContent,
				setSelectedContent,
			}}
		>
			{children}
		</SelectedContext.Provider>
	);
};

export default SelectedContext;
