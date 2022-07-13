import ViewContent from "../components/content/ViewContent";
import ContentMenu from "../components/menu/ContentMenu";

const HomePage = () => {
	return (
		<div className="flex h-full w-full flex-col items-center justify-center">
			<div
				className="mt-14 h-[960px] w-full transition-all duration-300 ease-out lg:mt-20 lg:hover:shadow-lg lg:hover:shadow-black"
				id="viewContent"
			>
				<ViewContent />
			</div>
			<div className="contentMenuAnimation my-4 h-28 w-full border-t-[1px] border-t-portfolio-wt border-opacity-50 lg:my-8">
				<ContentMenu />
			</div>
		</div>
	);
};

export default HomePage;
