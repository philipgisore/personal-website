import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Tell the dev server to serve these paths as real files,
    // not hand them to React Router
    fs: {
      strict: false,
    },
  },
});
