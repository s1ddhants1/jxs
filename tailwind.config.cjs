module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{svelte,js,ts}', './src/components/**/*.{svelte,js,ts}'],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
			}
		}
	},
	plugins: []
};
