import { createContext, useState } from "react";

const SelectedContext = createContext();

export const SelectedContent = ({ children }) => {
	const contents = ["Projects", "whoami", "Contact"];
	const [selectedContent, setSelectedContent] = useState("whoami");

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
