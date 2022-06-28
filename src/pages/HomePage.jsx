import ViewContent from "../components/content/ViewContent";
import ContentMenu from "../components/menu/ContentMenu";

const HomePage = () => {
	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<div className="w-full h-[960px] mt-20 bg-red-500">
				<ViewContent />
			</div>
			<div className="w-full h-28 my-10 bg-green-500">
				<ContentMenu />
			</div>
		</div>
	);
};

export default HomePage;
