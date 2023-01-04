import { sveltekit } from '@sveltejs/kit/vite';

const config = {
	plugins: [sveltekit()],
	optimizeDeps:{
		exclude:["@beyonk/svelte-mapbox","@beyonk/svelte-notifications","svelte-file-dropzone","svelte-loading-spinners","svelte-range-slider-pips"]
	}
};

export default config;
