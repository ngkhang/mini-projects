import { Link } from "react-router-dom";
import Card from "~/components/generic/Card";
import { DataListProject, DataPage } from "~/utils";
const { HomePage } = DataPage;

function Home() {
	return (
		<div className={`flex justify-center flex-grow`}>
			<div className="w-3/4 flex flex-col">
				<div>
					<h1>{HomePage.Title}</h1>
					<p className="mb-3 tracking-wide leading-6">
						{HomePage.Content}
					</p>
				</div>
				<div className="flex flex-col md:flex-row flex-wrap mb-3">
					{DataListProject.slice(0, 8).map((item) => {
						return (
							<Card key={item.Id} data={item} width="md:w-1/4" />
						);
					})}
				</div>
				{DataListProject.length >= 8 && (
					<>
						<div className="text-center my-2">
							<Link
								className="inline-block px-10 py-1 rounded-md bg-blue-500 text-slate-100"
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
