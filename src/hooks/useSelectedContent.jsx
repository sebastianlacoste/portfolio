import { useContext } from "react";

import SelectedContext from "../context/SelectedContent";

const useSelectedContent = () => {
	return useContext(SelectedContext);
};

export default useSelectedContent;
