import { useState } from 'react';
import { Link } from "react-router-dom";
import eProject from "~/types/eProject";
import { Blank } from "~/utils/imagesHelper";

function Card({ data }: {data : eProject}) {
	const [isLoad, setLoad] = useState(false);

	return (
		<div className={`w-full ${!data.isDone && "notDone"}`}>
			<div className="rounded-md bg-white border-2 border-gray-200 hover:border-slate-400 flex flex-col h-full justify-between">
				<div className="mb-5">
					<Link
						to={`/project/${data.Id}`}
						className="w-full inline-block overflow-hidden rounded-t-md relative mb-1 md:mb-3"
					>
						<img id='imageId'
							src={`${data.isDone && isLoad ? data.Image : Blank}`} onLoad={() => setLoad(true)} onError={() => setLoad(false)}
							alt="thumbnail of project"
							className="w-full hover:scale-125 bg-cover bg-no-repeat transition-transform"
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
					<div className="px-3 md:px-5">
						<Link
							to={`/project/${data.Id}`}
							className="inline-block mb-1 md:mb-3 font-medium text-base md:text-xl"
						>
							{data.Title}
						</Link>
						<p className="text-sm line-clamp-3 leading-5">{data.Description[0]}</p>
					</div>
				</div>
				<div className="flex justify-end mb-2 md:mb-3 px-3 md:px-5">
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
