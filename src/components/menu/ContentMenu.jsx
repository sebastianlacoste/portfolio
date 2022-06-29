import useSelectedContent from "../../hooks/useSelectedContent";

const ContentMenu = () => {
	const { selectedContent, setSelectedContent } = useSelectedContent();

	const options = ["Projects", "whoami", "Contact"].map((option) => {
		return (
			<button
				className={`pb-1 ease-out duration-75 transition-all ${
					selectedContent === option
						? "border-b-[1px] border-b-portfolio-wt rounded-sm"
						: "opacity-50 hover:opacity-100"
				}`}
				onClick={() => setSelectedContent(option)}
			>
				{option}
			</button>
		);
	});

	return (
		<div className="w-full h-full text-xl font-extralight text-portfolio-wt flex justify-evenly items-center">
			{options}
		</div>
	);
};

export default ContentMenu;
