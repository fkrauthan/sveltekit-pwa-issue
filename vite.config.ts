import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import {SvelteKitPWA} from "@vite-pwa/sveltekit";

export default defineConfig({
	plugins: [
		sveltekit(),
		SvelteKitPWA({
			strategies: "injectManifest",
			registerType: "autoUpdate",
			filename: "service-worker.ts",
			kit: {
				adapterFallback: "app.html",
				spa: true,
			},
			manifest: {
				id: "/",
				short_name: "SvelteKit PWA Issue",
				name: "SvelteKit PWA",
				description: "Small reproduction of the fallback issue with SvelteKit",
				display_override: ["window-controls-overlay"],
				display: "standalone",
				dir: "ltr",
				theme_color: "#0d6dfd",
				background_color: "#212529",
				edge_side_panel: {
					preferred_width: 400,
				},
				handle_links: "preferred",
				orientation: "portrait-primary",
				prefer_related_applications: false,
				related_applications: [],
				launch_handler: {
					client_mode: "navigate-existing",
				},
				screenshots: [],
			},

			pwaAssets: {
				config: true,
			},

			devOptions: {
				enabled: true,
				type: "module",
			},
		}),
	],
});
