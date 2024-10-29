// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme-without-fonts";
import "./style.css";

import "viewerjs/dist/viewer.min.css";
import imageViewer from "vitepress-plugin-image-viewer";
import { useRoute } from "vitepress";

export default {
	extends: DefaultTheme,
	Layout: () => {
		return h(DefaultTheme.Layout, null, {
			// https://vitepress.dev/guide/extending-default-theme#layout-slots
		});
	},
	enhanceApp({ app, router, siteData }) {
		// ...
	},
	setup() {
		// Get route
		const route = useRoute();
		// Using
		imageViewer(route);
	},
} satisfies Theme;
