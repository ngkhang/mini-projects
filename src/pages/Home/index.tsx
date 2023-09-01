import { Link } from "react-router-dom";
import Card from "~/components/generic/Card";
import { DataListProject, DataPage } from "~/utils";
const { HomePage } = DataPage;

function Home() {
	return (
		<div className="flex justify-center flex-grow">
			<div className="w-full md:w-3/4 flex flex-col">
				<div>
					<h1>{HomePage.Title}</h1>
					<p className="mb-6 tracking-wider text-sm md:text-lg md:text-center first-letter:text-2xl first-letter:text-pink-500 first-letter:font-semibold px-5 md:px-0 leading-6">
						{HomePage.Content}
					</p>
				</div>
				<div className="flex flex-col md:flex-row flex-wrap mb-5 px-6 md:px-0">
					{DataListProject.slice(0, 4).map((item) => {
						return (
							<div key={item.Id} className="w-full md:w-1/2 lg:w-1/4 md:px-2 mb-4 md:mb-4">
								<Card key={item.Id} data={item}/>
							</div>
						);
					})}
				</div>
				{DataListProject.length >= 4 && (
					<>
						<div className="text-center mb-4">
							<Link
								className="inline-block px-16 py-2 md:py-3 md:px-20 text-sm md:text-base rounded-lg bg-blue-500 text-slate-100"
								to={"/projects"}
							>
								More projects
							</Link>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Home;
