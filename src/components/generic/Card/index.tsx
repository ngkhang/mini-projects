import { Link } from "react-router-dom";
import eProject from "~/types/eProject";
import { Blank } from "~/utils/imagesHelper";

interface eCard {
	width: string;
	data: eProject;
}

function Card({ width, data }: eCard) {
	return (
		<div className={`p-2 w-full ${width} ${!data.isDone && "notDone"}`}>
			<div className="rounded-md bg-white border-2 border-gray-200 hover:border-slate-400  flex flex-col h-full justify-between">
				<div>
					<Link
						to={`/project/${data.Id}`}
						className="w-full inline-block overflow-hidden rounded-md relative px-6 mb-1"
					>
						<img
							src={`${data.isDone ? data.Image : Blank}`}
							alt="thumbnail of project"
							className="w-full hover:scale-110 bg-cover bg-no-repeat transition-transform"
						/>
						{!data.isDone && (
							<>
								<span className="absolute text-center translate-y-1/2 top-5 px-8 -right-10 py-1 font-normal text-xs bg-yellow-400 origin-center rotate-45 box-border">
									{" "}
									Comming soon
								</span>
							</>
						)}
					</Link>
					<div className="mx-4">
						<Link
							to={`/project/${data.Id}`}
							className="inline-block mb-1 font-medium md:text-lg text-base"
						>
							{data.Title}
						</Link>
						<p className="text-sm line-clamp-3 leading-5">
							{data.Description}
						</p>
					</div>
				</div>
				<div className="flex justify-end mb-1">
					<Link
						to={`/project/${data.Id}`}
						className="inline-block px-4 py-2 text-sm md:text-base font-medium tracking-wider"
					>
						Details
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Card;
