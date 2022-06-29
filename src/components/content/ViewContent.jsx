import useSelectedContent from "../../hooks/useSelectedContent";

import Projects from "./Projects";
import Whoami from "./Whoami";
import Contact from "./Contact";

const ViewContent = () => {
	const { contents, selectedContent } = useSelectedContent();

	if (selectedContent === contents[0]) {
		return <Projects />;
	} else if (selectedContent === contents[1]) {
		return <Whoami />;
	} else {
		return <Contact />;
	}
};

export default ViewContent;
