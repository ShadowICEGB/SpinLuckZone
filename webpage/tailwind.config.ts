import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';
import { skeleton } from '@skeletonlabs/tw-plugin';
import { join } from 'path';
import { spinluckzone_theme } from './src/spinluckzone_theme';

export default {
	darkMode: 'selector',
	content: ['./src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
			screens: {
			  'xl-custom': '1724px',
			},
		},
	},
	plugins: [
		typography,
		skeleton({
			themes: {
				custom: [
					spinluckzone_theme,
				],
			},
		}),
	],
} satisfies Config;
