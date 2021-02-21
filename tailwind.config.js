/** @format */

module.exports = {
	purge: ["./**/*.vue"],
	theme: {
		extend: {
			maxWidth: (theme, { breakpoints }) => ({
				...breakpoints(theme("screens")),
				...theme("spacing"),
				full: "100%",
				"11/12": "70%",
				screen: "100vw",
			}),
			minWidth: (theme, { breakpoints }) => ({
				...breakpoints(theme("screens")),
				...theme("spacing"),
				full: "100%",
				screen: "100vw",
			}),
			maxHeight: (theme, { breakpoints }) => ({
				...breakpoints(theme("screens")),
				...theme("spacing"),
				full: "100%",

				screen: "100vh",
			}),
			minHeight: (theme, { breakpoints }) => ({
				...breakpoints(theme("screens")),
				...theme("spacing"),
				full: "100%",
				screen: "100vh",
			}),
		},
	},
	variants: {
		extend: {},
	},
};
