// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    port: 4321
  },
  vite: {
    server: {
      allowedHosts: [
        'localhost',
        '127.0.0.1',
        '*.ngrok.io',
        '*.ngrok-free.dev',
        'bewhiskered-myrtle-gamily.ngrok-free.dev'
      ]
    }
  }
});
