import { Link, useLocation } from "react-router-dom";
import { IconsHelper, DataPage } from "~/utils";

const { Brand, Nav, Social } = DataPage.MenuHeader;

export default function Header() {
	const currentPage = useLocation().pathname;

	return (
		<div className="flex justify-center bg-white shadow-md">
			<div className="w-3/4 flex items-center justify-between">
				<div className="">
					<Link to={Brand.Url}>
						<div>
							{IconsHelper[`${Brand.IconName}`](
								"text-pink-500 text-3xl"
							)}
						</div>
					</Link>
				</div>
				<div className="flex items-center">
					<div>
						{Nav.map((ele) => {
							return (
								<>
									<Link
										key={ele.Id}
										to={ele.Url}
										className={`inline-block mr-2 px-5 py-3 font-semibold border-b-[3px] hover:text-pink-400 ${
											currentPage === ele.Url
												? "border-pink-600 text-pink-600"
												: "border-white"
										}`}
									>
										{ele.Name}
									</Link>
								</>
							);
						})}
					</div>
					<div className="mx-2 flex items-center">
						{Social.map((ele) => {
							return (
								<>
									<a
										key={ele.Id}
										href={ele.Url}
										target="_blank"
										className="inline-block mr-2"
									>
										<div>
											{IconsHelper[`${ele.IconName}`](
												`text-xl text-[${ele.Color}]`
											)}
										</div>
									</a>
								</>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}
