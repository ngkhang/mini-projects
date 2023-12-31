import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			"~": path.resolve(__dirname, "./src/"),
			components: path.resolve(__dirname, "./src/components/"),
			utils: path.resolve(__dirname, "./src/utils/"),
			images: path.resolve(__dirname, "./src/images/"),
			types: path.resolve(__dirname, "./src/types/"),
			assets: path.resolve(__dirname, "./src/assets/"),
			pages: path.resolve(__dirname, "./src/pages/"),
			routes: path.resolve(__dirname, "./src/routes/"),
		},
	},
});
