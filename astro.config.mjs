import path, { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// projectRoot: '.',     // Where to resolve all URLs relative to. Useful if you have a monorepo project.
	// pages: './src/pages', // Path to Astro components, pages, and data
	// dist: './dist',       // When running `astro build`, path to final static output
	// public: './public',   // A folder of static files Astro will copy to the root. Useful for favicons, images, and other files that don’t need processing.
	vite: {
		ssr: {
			external: ['svgo'],
		},
		resolve: {
			alias: {
				$: path.resolve(__dirname, './src'),
				$components: path.resolve(__dirname, './src/components'),
				$pages: path.resolve(__dirname, './src/pages'),
				$layouts: path.resolve(__dirname, './src/layouts')
			},
		},
		optimizeDeps: {
			allowNodeBuiltins: true
		}
	},
	buildOptions: {
		site: 'http://astros.warps.it', // Your public domain, e.g.: https://my-site.dev/. Used to generate sitemaps and canonical URLs.
		sitemap: true, // Generate sitemap (set to "false" to disable)
	},
	devOptions: {
		// hostname: 'localhost',  // The hostname to run the dev server on.
		// port: 3000,             // The port to run the dev server on.
	},
	renderers: [],
});
