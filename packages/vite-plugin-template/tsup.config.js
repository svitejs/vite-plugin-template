/** @type {import("tsup").Options} */
export const tsup = {
	entryPoints: ['src/index.ts'],
	format: ['esm'],
	sourcemap: true,
	splitting: false,
	clean: true,
	target: 'node14.13.1'
};
