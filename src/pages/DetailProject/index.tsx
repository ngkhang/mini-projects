import { Navigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { IconsHelper, DataListProject } from "~/utils";
import eProject from "~/types/eProject";
import { Blank } from '~/utils/imagesHelper';

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
	const [project, setProject] = useState<eProject | string >();
	const [isLoad, setLoad] = useState(false);

	useEffect(() => {
		const project = DataListProject.filter((ele) => {
			if (projectName === ele.Id.toLowerCase()) return ele;
		});

		setProject(project[0] ? project[0] : "error");
	}, [projectName]);

	return (
		<div id="project" className="flex justify-center flex-grow">
			<div className="w-full flex flex-col items-center md:w-3/4 px-8 md:px-0">
				{
					typeof project !== "string"
						? project && (
								<>
									<h1>{project.Title}</h1>
									<div className="w-full md:w-4/5 lg:w-3/4 mb-10">
										<img
											src={`${project.isDone && isLoad ? project.Image : Blank}`} onLoad={() => setLoad(true)} onError={() => setLoad(false)}
											alt={project.Alt}
											className="w-full"
										/>
									</div>
									<div className="flex flex-wrap justify-between mb-6">
										<Container
											width="w-full"
											className="mb-3 md:mb-6"
											title="Project Description"
										>
											<>
												{
													project.Description.map((ele, idx) => {
														return <p className="ml-2" key={idx}>{`- ${ele}`}</p>
													})
												}
											</>
										</Container>
										<Container
											width="w-full md:w-[75%]"
											className="mb-3 md:mb-6"
											title="Feature"
										>
											<ul className="list-disc list-inside">
												{project.Feature.map(
													(item, index) => (
														<li key={index}>
															{item}
														</li>
													)
												)}
											</ul>
										</Container>
										<Container
											width="w-full md:w-[25%]"
											className="mb-3 md:mb-6"
											title="Tech"
										>
											<ul className="list-disc list-inside">
												{project.Techs.map(
													(item, index) => (
														<li key={index}>
															{item}
														</li>
													)
												)}
											</ul>
										</Container>
										<Container
											width="w-full"
											className=""
											title="Keywords"
										>
											<p className="text-sm md:text-base italic break-words">{`#${project.Keywords.join("  #")}`}</p>
										</Container>
									</div>

									<div className="w-full flex items-center mb-4">
										{
											project.Link.map((link) => {
												return (
													link.Url && (
														<a key={link.Id} href={link.Url} target="_blank" className="flex items-center mr-2 px-8 py-1 bg-slate-300 hover:shadow-md rounded-md">
															{IconsHelper[link.Name]("mr-1")} {link.Name}
														</a>
													)
												)
											})
										}
									</div>
								</>
						)
						: <Navigate to={"/projects"} />
				}
			</div>
		</div>
	);
}

export default Project;
