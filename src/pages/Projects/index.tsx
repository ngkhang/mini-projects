import Card from "~/components/generic/Card";
import { DataListProject } from "~/utils";

function Projects() {
	return (
		<div className="flex justify-center flex-grow">
			<div className="py-4 w-full md:w-3/4 flex flex-wrap">
				{DataListProject.map((item) => {
					return (
						<div className="w-full md:w-1/2 lg:w-1/4 px-5 md:px-2 mb-5 md:mb-4">
							<Card key={item.Id} data={item}/>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default Projects;
