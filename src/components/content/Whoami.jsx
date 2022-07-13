const Whoami = () => {
	return (
		<div className="whoamiAnimation flex h-full w-full flex-col items-center justify-center p-2 sm:p-0">
			<h1 className="cursor-default text-center text-6xl font-extralight tracking-wider text-portfolio-wt sm:text-7xl md:text-8xl lg:text-9xl">
				Hi, I'm Sebastian
			</h1>
			<h2 className="mt-8 cursor-default px-5 text-center text-xs font-extralight tracking-wider text-portfolio-wt opacity-75 transition-all duration-300 ease-out hover:opacity-100 sm:text-sm md:mt-10 md:text-lg lg:px-0 lg:text-xl">
				I'm a Front-end Developer focused on HTML, CSS, JavaScript, React,
				Tailwindcss, and Responsive Design.
			</h2>
			<h3 className="mt-4 cursor-default px-6 text-center text-[11px] font-extralight tracking-widest text-portfolio-wt opacity-50 transition-all duration-300 ease-out hover:opacity-100 sm:px-0 sm:text-sm md:text-lg lg:text-xl">
				I love to bring any idea to life through code.
			</h3>
			<a
				className="mt-8 flex h-8 w-24 items-center justify-center text-base font-extralight tracking-widest text-portfolio-wt opacity-75 shadow shadow-black transition-all duration-300 ease-in-out hover:scale-x-105 hover:opacity-100 hover:shadow-lg hover:shadow-black md:h-10 md:w-28 md:text-lg"
				href="./cv/Sebastian-Lacoste-CV.pdf"
				target="_blank"
			>
				View CV
			</a>
		</div>
	);
};
//
export default Whoami;
