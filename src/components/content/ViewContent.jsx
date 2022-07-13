import useSelectedContent from "../../hooks/useSelectedContent";

import Showcase from "./Showcase";
import Whoami from "./Whoami";
import Contact from "./Contact";

const ViewContent = () => {
	const { contents, selectedContent } = useSelectedContent();

	if (selectedContent === contents[0]) {
		return <Showcase />;
	} else if (selectedContent === contents[1]) {
		return <Whoami />;
	} else {
		return <Contact />;
	}
};

export default ViewContent;
