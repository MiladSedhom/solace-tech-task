/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#003FAD',
				fg: '#151D48',
				fg1: '#737791',
				bg: '#FAFAFA',
				bg1: '#FFFFFF',
				border: '#E7EAEE',
				'blue-1': '#459AFF',
				'blue-2': '#0F6CBD',
				'blue-3': '#003FAD',
				green: '#004A3F',
			},
			fontFamily: {
				sans: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
