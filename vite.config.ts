import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';

// base './' : les chemins sont relatifs, le site fonctionne donc à la racine
// d'un domaine comme dans un sous-dossier GitHub Pages (/nom-du-depot/).
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
});
