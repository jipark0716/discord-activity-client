import {defineConfig} from 'vite';
import fs from 'node:fs';

export default defineConfig({
    server: {
        host: '127.0.0.1',
        port: 5173,
        strictPort: true,
        https: {
            key: fs.readFileSync('.cert/localhost-key.pem'),
            cert: fs.readFileSync('.cert/localhost.pem'),
        },
    },
});