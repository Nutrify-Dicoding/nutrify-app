/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontSize: {
				sm: "0.875rem",
				base: "1rem",
				md: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5625rem",
				"3xl": "1.956rem",
				"4xl": "2.475rem",
				"5xl": "3rem",
				"mobile-5xl": "1.802rem",
				"mobile-4xl": "1.602rem",
				"mobile-3xl": "1.424rem",
				"mobile-2xl": "1.25rem",
				"mobile-xl": "1.125rem",
			},
		},
	},
	plugins: [],
};
