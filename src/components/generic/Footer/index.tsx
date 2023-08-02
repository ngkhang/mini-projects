import { DataPage } from "~/utils";

function Footer() {
	return (
		<div className="mt-5 text-center bg-slate-100">
			<p className="py-4 text-sm tracking-wider">
				&copy; <em id="date">{new Date().getFullYear()}</em>
				{DataPage.Footer}
			</p>
		</div>
	);
}
export default Footer;
