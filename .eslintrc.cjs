module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ["airbnb"],
	ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.js"],
	parserOptions: { ecmaVersion: "latest", sourceType: "module" },
	settings: { react: { version: "18.2" } },
	plugins: ["react-refresh"],
	rules: {
		"react-refresh/only-export-components": [
			"warn",
			{ allowConstantExport: true },
		],
		"react/function-component-definition": [
			2,
			{
				namedComponents: "function-declaration",
			},
		],
		"no-tabs": "off",
		"indent": "off",
		"react/jsx-indent": "off",
		"react/jsx-indent-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/no-array-index-key": "off",
		"no-underscore-dangle": "off",
		"jsx-a11y/click-events-have-key-events": "off",
		"jsx-a11y/no-noninteractive-element-interactions": "of",
		"no-mixed-operators": "off",
		"radix": "off",
		// "no-console": "off",
	},
};
