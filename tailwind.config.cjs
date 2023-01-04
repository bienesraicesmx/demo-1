const config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  daisyui: {
		themes: [{
			bienes: {
					primary: "#80a4ed",
					secondary: "#3C91E6",
					accent: "#F93943",
					neutral: "#3d4451",
					"base-100": "#ffffff",
			},
		}],
	},
  theme: {
    extend: {},
  },

  plugins: [require('daisyui')],
};

module.exports = config;
