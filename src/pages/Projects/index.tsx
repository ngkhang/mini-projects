import Card from "~/components/generic/Card";
import { DataListProject } from "~/utils";

function Projects() {
	return (
		<div className="flex justify-center flex-grow">
			<div className="w-3/4 py-4 flex flex-wrap">
				{DataListProject.map((item) => {
					return <Card key={item.Id} data={item} width="md:w-1/3" />;
				})}
			</div>
		</div>
	);
}

export default Projects;
