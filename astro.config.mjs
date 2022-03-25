// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable the Solid.js renderer to support Solid.js JSX components.
	renderers: ["@astrojs/renderer-solid"],
	buildOptions: {
		sitemap: false,
	},
	markdownOptions: {
		render: [
			"@astrojs/markdown-remark",
			{
				syntaxHighlight: "shiki",
				shikiConfig: {
					theme: "material-ocean",
					langs: ["js", "ts", "php"],
					wrap: false,
				},
			},
		],
	},
});
