/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'primary': '#B30000',
				'secondary': '#E60000',
				'tertiary': '#E65C00',
				'accent': '#FFAF00',
				'fuchsia': '#A10079',
			},

		},
	},
	plugins: [],
}
