// astro.config.mjs
import { defineConfig } from 'astro/config';

const path = require('path');

export default defineConfig({
	vite: {
		ssr: {
			external: ['svgo'],
		},
		resolve: {
			alias: {
				$: path.resolve(__dirname, './src'),
				$components: path.resolve(__dirname, './src/components'),
				$pages: path.resolve(__dirname, './src/pages'),
				$layouts: path.resolve(__dirname, './src/layouts'),
			},
		},
	},
});
