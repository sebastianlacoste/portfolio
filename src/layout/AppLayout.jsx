import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import pwa from "../pwa/app";

const AppLayout = () => {
	useEffect(() => {
		pwa();
	}, []);

	return (
		<>
			<div className="h-screen w-full bg-portfolio-dk">
				<div
					className="githubIconAnimation fixed h-10 w-10 cursor-pointer rounded-br-full bg-portfolio-wt shadow-md shadow-black transition-all duration-300 
					ease-out hover:shadow-lg hover:shadow-portfolio-wt lg:h-12 lg:w-12"
				>
					<a
						href="https://github.com/sebastianlacoste/portfolio"
						target="_blank"
						rel="noopener noreferrer"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="31"
							height="30"
							fill="none"
							viewBox="0 0 31 30"
							className="absolute left-[1px] top-[1px] transition-all duration-300 ease-out hover:scale-105 lg:left-1 lg:top-1"
						>
							<path
								fill="#212125"
								fillRule="evenodd"
								d="M15.5 0C6.936 0 0 6.882 0 15.38c0 6.805 4.437 12.553 10.598 14.59.775.135 1.066-.326 1.066-.73 0-.365-.02-1.576-.02-2.864-3.894.711-4.902-.942-5.212-1.807-.174-.443-.93-1.807-1.588-2.173-.543-.288-1.318-1-.02-1.019 1.221-.019 2.093 1.115 2.383 1.577 1.395 2.326 3.624 1.672 4.515 1.269.136-1 .542-1.673.988-2.057-3.449-.385-7.053-1.711-7.053-7.594 0-1.672.601-3.057 1.59-4.133-.156-.385-.698-1.961.154-4.076 0 0 1.298-.403 4.263 1.577 1.24-.346 2.557-.52 3.875-.52 1.317 0 2.635.174 3.875.52 2.964-2 4.262-1.577 4.262-1.577.853 2.115.31 3.691.155 4.076.988 1.076 1.589 2.441 1.589 4.133 0 5.902-3.623 7.21-7.072 7.594.562.48 1.046 1.403 1.046 2.845 0 2.057-.019 3.71-.019 4.23 0 .403.29.883 1.066.73a15.518 15.518 0 007.645-5.61A15.324 15.324 0 0031 15.378C31 6.882 24.064 0 15.5 0z"
								clipRule="evenodd"
							></path>
						</svg>
					</a>
				</div>
				<div className="mx-auto h-full lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl">
					<Outlet />
				</div>
			</div>
		</>
	);
};

export default AppLayout;
