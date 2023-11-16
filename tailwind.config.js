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
			colors: {
				green: "#299702",
				red: "#FF3D14",
				pink: "#FF785B",
				yellow: "#FFB703",
				orange: "#FB8500",
				"orange-100": "#EA580C",
				navy: "#002140",
				white: "#ffffff",
				"white-100": "#F6F6F6",
				"white-200": "#F3F7FD",
				"white-300": "#E8EDF1",
				"white-400": "#BEBEBE",
				"white-500": "#979699",
			},
		},
	},
	plugins: [],
};
