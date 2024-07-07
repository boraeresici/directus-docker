import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	//change port for production
	preview: {
		port: 3000,
	  },
	// for dev
	  server: {
		//port: 5173,
		host: "0.0.0.0",
        port: 3000,
        strictPort: true,
        hmr: {
            port: 5173,
        }
		  },
});
