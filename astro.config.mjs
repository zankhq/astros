import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { autolinkConfig } from "./plugins/rehype-autolink-config";
import rehypeSlug from "rehype-slug";
import NetlifyCMS from "astro-netlify-cms";
import astroI18next from "astro-i18next";

export default defineConfig({
	site: "https://astroship.zank.it",
	integrations: [
		tailwind(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		mdx(),
		sitemap(),
		NetlifyCMS({
			config: {
				backend: {
					name: "github",
					repo: "warpsi/astros",
					branch: "main",
					base_url: "https://astros-7h0.pages.dev",
					auth_endpoint: "/api/auth",
				},
				i18n: {
					structure: "multiple_folders",
					locales: ["en", "it"],
					default_locale: "en",
				},
				collections: [
					// Content collections
					{
						name: "posts",
						i18n: true,
						label: "Blog Posts",
						folder: "src/content/blog",
						create: true,
						delete: true,
						fields: [
							{
								name: "title",
								widget: "string",
								label: "Post Title",
								i18n: true,
							},
							{
								label: "Draft",
								name: "draft",
								widget: "boolean",
								i18n: "duplicate",
							},
							{
								label: "Author",
								name: "author",
								widget: "string",
								i18n: "duplicate",
							},
							{
								label: "Tags",
								name: "tags",
								widget: "list",
								i18n: true,
							},
							{
								label: "Image",
								name: "image",
								widget: "object",
								i18n: true,
								fields: [
									{
										label: "Source",
										name: "src",
										widget: "image",
										i18n: "duplicate",
									},
									{
										label: "Alt Text",
										name: "alt",
										widget: "string",
										i18n: true,
									},
								],
							},
							{
								label: "Snippet",
								name: "snippet",
								widget: "text",
								i18n: true,
							},
							{
								label: "Publish Date",
								name: "publishDate",
								widget: "datetime",
								format: "YYYY-MM-DD HH:mm",
								i18n: "duplicate",
							},
							{
								label: "Category",
								name: "category",
								widget: "select",
								options: ["Tutorials", "News", "Reviews"],
								i18n: "duplicate",
							},
							{
								name: "body",
								widget: "markdown",
								label: "Post Body",
								i18n: true,
							},
						],
					},
				],
			},
		}),
		astroI18next(),
	],
	markdown: {
		rehypePlugins: [
			rehypeSlug,
			// This adds links to headings
			[rehypeAutolinkHeadings, autolinkConfig],
		],
	},
});
