import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { PublicRoutes } from "./routes";
import Layout from "./components/Layout";
import DetailProject from "./pages/DetailProject";

function App() {
	return (
		<>
			<Router>
				<Routes>
					{PublicRoutes.map((route, index) => {
						return (
							<Route
								key={index}
								path={route.path}
								element={
									<Layout>
										<route.component />
									</Layout>
								}
							/>
						);
					})}
					<Route
						path="/project/:projectName"
						element={
							<Layout>
								<DetailProject />
							</Layout>
						}
					/>
					<Route path="*" element={<div>Error</div>} />
				</Routes>
			</Router>
		</>
	);
}

export default App;
