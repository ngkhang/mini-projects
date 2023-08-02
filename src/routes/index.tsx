import Home from "~/pages/Home";
import About from "~/pages/About";
import Projects from "~/pages/Projects";


const PublicRoutes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/projects",
		component: Projects,
	},
];

export { PublicRoutes };
