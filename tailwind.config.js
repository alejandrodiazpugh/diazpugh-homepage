/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#1A2EC6',
				yellow: '#FADB00',
				cyan: '#00D7C3',
				orange: '#FF8F38',
				pink: '#FDACB1',
				red: '#EE3923',
				white: '#FFF',
			},
			fontFamily: {
				poppins: 'Poppins, sans-serif',
				sourceCode: 'Montserrat, sans-serif',
			},
			boxShadow: {
				top: '0px -6px 18px 1px rgba(0,0,0,0.39)',
			},
		},
	},
	plugins: [],
};
