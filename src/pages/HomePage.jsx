import ViewContent from "../components/content/ViewContent";
import ContentMenu from "../components/menu/ContentMenu";

const HomePage = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div
				className="w-full h-[960px] mt-14 lg:mt-20 lg:hover:shadow-lg lg:hover:shadow-black ease-out duration-300 transition-all"
				id="viewContent"
			>
				<ViewContent />
			</div>
			<div className="w-full h-28 my-4 lg:my-8 border-t-[1px] border-t-portfolio-wt border-opacity-50 contentMenuAnimation">
				<ContentMenu />
			</div>
		</div>
	);
};

export default HomePage;
