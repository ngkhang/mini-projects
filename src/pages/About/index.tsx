import { DataPage } from "~/utils";
const { AboutPage } = DataPage;

function About() {
	return (
		<div className="flex justify-center flex-grow">
			<div className="w-full md:w-3/4">
				<h1 className="">{AboutPage.Title}</h1>
				<div className="px-10 md:px-0">
					{AboutPage.Content.map((ele, index) => {
						return (
							<p
								key={index}
								className="text-sm first-letter:text-3xl md:first-letter:text-4xl first-letter:text-pink-400 mb-3 md:text-xl tracking-wide leading-7 md:leading-8"
							>
								{ele}
							</p>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default About;
