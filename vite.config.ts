import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // refer to bootstrap code by ~bootstrap in imports
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  //for GH pages to work on build and commit
  build:{
    outDir: "docs",
    assetsDir: ""
  }

})
