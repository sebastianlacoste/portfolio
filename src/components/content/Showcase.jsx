import { useState, useEffect } from "react";

import Projects from "./Projects";

const Showcase = () => {
	const projectList = Projects();
	const [projectCounter, setProjectCounter] = useState(0);
	const [projectSelected, setProjectSelected] = useState(
		projectList[projectCounter]
	);

	useEffect(() => {
		setProjectSelected(projectList[projectCounter]);
	}, [projectCounter]);

	const counterUp = () => {
		if (projectCounter === projectList.length - 1) {
			setProjectCounter(0);
		} else {
			setProjectCounter(projectCounter + 1);
		}
	};

	const counterDown = () => {
		if (projectCounter === 0) {
			setProjectCounter(projectList.length - 1);
		} else {
			setProjectCounter(projectCounter - 1);
		}
	};

	const indexButton = (value) => {
		return (
			<button
				className="projectsIndexAnimation flex h-9 w-14 items-center justify-center rounded-lg text-lg font-bold text-portfolio-wt opacity-50 shadow-md shadow-black outline-none transition-all duration-300 ease-in-out hover:scale-x-105 hover:opacity-100 hover:shadow-lg hover:shadow-black md:h-10 md:w-16 md:text-xl"
				onClick={() => {
					value === "<" ? counterDown() : counterUp();
				}}
			>
				{value}
			</button>
		);
	};

	const techStackBoxs = Object.values(projectSelected.techStack).map(
		(stack) => (
			<div
				className="projectsStackAnimation flex cursor-pointer items-center justify-center p-3 shadow-inner shadow-black transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg hover:shadow-black"
				key={stack.props.title}
			>
				<div>{stack}</div>
			</div>
		)
	);

	return (
		<>
			<div
				key={Date.now().toString(32)}
				className="flex h-[92%] flex-col items-center justify-center"
			>
				<div className="flex h-full w-full flex-col items-center justify-center overflow-hidden p-2 sm:p-0">
					<div className="projectsTitleAnimation mx-2 flex w-full flex-col items-center justify-center gap-2 sm:w-auto sm:gap-5 lg:flex-row xl:mx-16 2xl:mx-20">
						<div className="scale-[60%] sm:scale-100 lg:border-r-[1px] lg:border-r-portfolio-wt lg:border-opacity-50 lg:pr-5">
							{projectSelected.logo}
						</div>

						<h1 className="flex items-center pt-2 text-center text-xs font-extralight tracking-wide text-portfolio-wt sm:text-base lg:h-[85%] lg:pt-0 lg:text-left">
							{projectSelected.description}
						</h1>
					</div>

					<div className="mt-4 flex scale-[80%] flex-wrap items-center justify-center gap-5 sm:mt-14 sm:scale-100 lg:gap-10">
						{techStackBoxs}
					</div>
				</div>
			</div>
			<div
				key={indexButton}
				className="flex h-[8%] w-full items-center justify-center gap-2"
			>
				{indexButton("<")}
				{indexButton(">")}
			</div>
		</>
	);
};

export default Showcase;
