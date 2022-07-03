const Whoami = () => {
	return (
		<div className="w-full h-full p-2 sm:p-0 flex flex-col justify-center items-center whoamiAnimation">
			<h1 className="text-center text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extralight tracking-wider text-portfolio-wt cursor-default">
				Hi, I'm Sebastian
			</h1>
			<h2 className="px-5 lg:px-0 mt-8 md:mt-10 opacity-75 hover:opacity-100 text-center text-xs sm:text-sm md:text-lg lg:text-xl font-extralight tracking-wider text-portfolio-wt ease-out duration-300 transition-all cursor-default">
				I'm a Front-end Developer focused on HTML, CSS, JavaScript, React,
				Tailwindcss, and Responsive Design.
			</h2>
			<h3 className="px-6 sm:px-0 mt-4 opacity-50 hover:opacity-100 text-center text-[11px] sm:text-sm md:text-lg lg:text-xl font-extralight tracking-widest text-portfolio-wt ease-out duration-300 transition-all cursor-default">
				I love to bring any idea to life through code.
			</h3>
		</div>
	);
};
//
export default Whoami;
