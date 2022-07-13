import useSelectedContent from "../../hooks/useSelectedContent";

const ContentMenu = () => {
	const { contents, selectedContent, setSelectedContent } =
		useSelectedContent();

	const options = contents.map((option) => {
		return (
			<button
				className={`pb-1 transition-all duration-75 ease-out ${
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
		<div className="flex h-full w-full items-center justify-evenly text-xl font-extralight text-portfolio-wt">
			{options}
		</div>
	);
};

export default ContentMenu;
