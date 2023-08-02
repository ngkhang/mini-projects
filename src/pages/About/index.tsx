import { DataPage } from "~/utils";
const { AboutPage } = DataPage;

function About() {
	return (
		<div className="flex justify-center flex-grow">
			<div className="w-3/4">
				<h1 className="">{AboutPage.Title}</h1>
				{AboutPage.Content.map((ele, index) => {
					return (
						<p
							key={index}
							className="mb-3 text-lg tracking-wide leading-7"
						>
							{ele}
						</p>
					);
				})}
			</div>
		</div>
	);
}

export default About;
