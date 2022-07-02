import useSelectedContent from "../../hooks/useSelectedContent";

const ContentMenu = () => {
	const { contents, selectedContent, setSelectedContent } =
		useSelectedContent();

	const options = contents.map((option) => {
		return (
			<button
				className={`pb-1 ease-out duration-75 transition-all ${
					selectedContent === option
						? "border-b-[1px] border-b-portfolio-wt"
						: "opacity-50 hover:opacity-100"
				}`}
				onClick={() => setSelectedContent(option)}
				key={option}
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
