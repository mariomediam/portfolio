/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {		
		  colors: {
			'df-background': '#252734',
			'df-title': '#6B79AC',
			'df-link': '#F4AC39',
			'df-text': '#CCD3E3',			
			'df-bg-section': '#404040',	
			'df-yellow': {				
				DEFAULT: '#FCCC71',
				dark: '#d1ab65',
			  },
		  },
		},
	  },
	plugins: [require('flowbite/plugin')],		
}