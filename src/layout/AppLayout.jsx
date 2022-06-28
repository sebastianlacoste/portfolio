import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import pwa from "../pwa/app";

const AppLayout = () => {

	useEffect(() => {
		pwa();
	}, []);

	return (
		<>
			<div className="w-full h-screen bg-portfolio-dk">
				<div className="container mx-auto h-full">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AppLayout;
