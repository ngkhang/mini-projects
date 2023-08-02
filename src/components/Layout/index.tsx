import Footer from "../generic/Footer";
import Header from "../generic/Header";

function Layout({ children }: { children: React.ReactElement }) {
	return (
		<>
			<div className="relative min-h-screen flex flex-col">
				<Header />
				{children}
				<Footer />
			</div>
		</>
	);
}

export default Layout;
