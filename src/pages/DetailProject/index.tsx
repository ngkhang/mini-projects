import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconsHelper, DataListProject } from "~/utils";
import eProject from "~/types/eProject";

const Container = ({
	width,
	className,
	children,
	title,
}: {
	width: string;
	className?: string;
	children: React.ReactElement;
	title: string;
}) => {
	return (
		<>
			<div className={`${width} ${className}`}>
				<h3>{title}</h3>
				{children}
			</div>
		</>
	);
};

function Project() {
	const { projectName } = useParams();
	const [project, setProject] = useState<eProject | string>();
	useEffect(() => {
		const project = DataListProject.filter((ele) => {
			if (projectName === ele.Title.toLowerCase()) return ele;
		});

		setProject(project[0] ? project[0] : "error");
	}, [projectName]);

	return (
		<div id="project" className="flex justify-center flex-grow">
			<div className="w-3/4">
				{typeof project !== "string" ? (
					project && (
						<>
							<h1>{project.Title}</h1>
							<div className="mb-3">
								<img
									src={project.Image}
									alt={project.Alt}
									className="w-2/5 mx-auto"
								/>
							</div>
							<div className="flex flex-wrap justify-between">
								<Container
									width="w-full"
									className="mb-3"
									title="Project Description"
								>
									<p className="">{project.Description}</p>
								</Container>
								<Container
									width="w-4/6"
									className="mb-3"
									title="Feature"
								>
									<ul className="list-disc list-inside">
										{project.Feature.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</Container>
								<Container
									width="w-2/6"
									className="mb-3"
									title="Tech"
								>
									<ul className="list-disc list-inside">
										{project.Techs.map((item, index) => (
											<li key={index}>{item}</li>
										))}
									</ul>
								</Container>
							</div>

							<div className="flex items-center mb-3">
								<a
									href={project.Url.Preview}
									target="_blank"
									className="w-  flex items-center mr-2 px-8 py-1 bg-slate-300 hover:shadow-md rounded-md"
								>
									{IconsHelper.Github("mr-1")} Preview
								</a>
								<a
									href={project.Url.Github}
									target="_blank"
									className="w- flex items-center mr-2 px-8 py-1 bg-slate-300 hover:shadow-md rounded-md"
								>
									{IconsHelper.Github("mr-1")} Github
								</a>
							</div>
						</>
					)
				) : (
					<Navigate to={"/projects"} />
				)}
			</div>
		</div>
	);
}

export default Project;
