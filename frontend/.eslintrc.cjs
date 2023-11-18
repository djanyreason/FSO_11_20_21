module.exports = {
  root: true,
  env: { 
    browser: true,
    es2020: true,
    'jest/globals': true
	},
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
		'plugin:cypress/recommended',
		'plugin:jest/recommended'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'react/prop-types': 0,
		'no-unused-vars': 0,
		'no-console': 0,
		'eqeqeq': 'error',
		'no-trailing-spaces': 'error',
		'object-curly-spacing': [
			'error', 'always'
		],
		'arrow-spacing': [
			'error', { 'before': true, 'after': true }
		],
		'indent': [
			'error',
			2
		],
		'linebreak-style': [
			'error',
			'unix'
		],
		'quotes': [
			'error',
			'single'
		],
		'semi': [
			'error',
			'always'
		]
  },
}