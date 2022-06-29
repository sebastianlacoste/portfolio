import ViewContent from "../components/content/ViewContent";
import ContentMenu from "../components/menu/ContentMenu";

const HomePage = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full h-full mt-20 bg-red-500">
				<ViewContent />
			</div>
			<div className="w-full h-28 lg:mt-10 lg:mb-5 bottom-0 border-t-[1px] border-t-portfolio-wt border-opacity-50 rounded-sm absolute lg:relative">
				<ContentMenu />
			</div>
		</div>
	);
};

export default HomePage;
