// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: "The Dev Guide",
	tagline: "A Comprehensive Guide for Developers by Yet Another Developer",
	url: "https://thedevguide.swalahamani.com",
	baseUrl: "/",
	onBrokenLinks: "throw",
	onBrokenMarkdownLinks: "warn",
	favicon: "img/favicon.ico",
	organizationName: "swalahamani", // Usually your GitHub org/user name.
	projectName: "the-dev-guide", // Usually your repo name.

	presets: [
		[
			"@docusaurus/preset-classic",
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve("./sidebars.js"),
					// Please change this to your repo.
					editUrl:
						"https://github.com/swalahamani/the-dev-guide/edit/main/website/",
				},
				blog: {
					showReadingTime: true,
					// Please change this to your repo.
					editUrl:
						"https://github.com/swalahamani/the-dev-guide/edit/main/website/blog/",
				},
				theme: {
					customCss: require.resolve("./src/css/custom.css"),
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: "The Dev Guide",
				logo: {
					alt: "The Dev Guide Logo",
					src: "img/logo.svg",
				},
				items: [
					{
						type: "doc",
						docId: "intro",
						position: "left",
						label: "Tutorial",
					},
					{to: "/blog", label: "Blog", position: "left"},
					{
						href: "https://github.com/swalahamani/the-dev-guide",
						label: "GitHub",
						position: "right",
					},
				],
			},
			footer: {
				style: "dark",
				links: [
					{
						title: "Docs",
						items: [
							{
								label: "Tutorial",
								to: "/docs/intro",
							},
						],
					},
					{
						title: "Community",
						items: [
							{
								label: "Website",
								href: "https://swalahamani.com",
							},
							{
								label: "Twitter",
								href: "https://twitter.com/swalahamani",
							},
							{
								label: "LinkedIn",
								href: "https://linkedin.com/in/swalahamani",
							},
						],
					},
					{
						title: "More",
						items: [
							{
								label: "Blog",
								to: "/blog",
							},
							{
								label: "GitHub",
								href: "https://github.com/swalahamani/the-dev-guide",
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()} Swalah Amani. Built with Docusaurus.`,
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme,
			},
		}),
};

module.exports = config;
