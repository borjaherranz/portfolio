// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: 'https://borjaherranz.github.io/',
    base: '/portfolio/',
    vite: {
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src')
            }
        }
    }
});