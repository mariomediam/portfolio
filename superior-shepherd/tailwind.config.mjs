/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
	'./node_modules/flowbite/**/*.js'],
	theme: {
		extend: {		
		  colors: {
			'dfBackground': '#252734',
			'dfTitle': '#6B79AC',
			'dfLink': '#F4AC39',
			'dfText': '#CCD3E3',			
			'dfBgSection': '#404040',	
			'dfYellow': {				
				DEFAULT: '#FCCC71',
				dark: '#d1ab65',
			  },
		  },
		},
	  },
	plugins: [require('flowbite/plugin')],		
}