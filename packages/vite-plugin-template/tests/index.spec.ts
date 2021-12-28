import { describe, it, expect } from 'vitest';
import { pluginFunction } from '../src';

describe('vite-plugin-template', () => {
	it('should be named', function () {
		expect(pluginFunction().name).toBe('vite-plugin-template');
	});
});
