import resolve from 'rollup-plugin-node-resolve';
import { terser } from "rollup-plugin-terser";
import pkg from './package.json';

export default [
  // For browser standalone
	{
		input: 'src/index.js',
		output: {
			name: 'katex-element',
			file: pkg.browser,
			format: 'umd'
		},
		plugins: [
			resolve( { browser: true } ),
			terser()
		]
	},

  // For bundlers
	{
		input: 'src/index.js',
		output: [
			{ file: pkg.module, format: 'es' }
    ],
    plugins: [
		]
	}
];
