import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
        alias: [
            { find: '@root', replacement: path.resolve(__dirname, 'src') },
            { find: '@views', replacement: path.resolve(__dirname, 'src/views') },
            { find: '@libs', replacement: path.resolve(__dirname, 'src/libs') },
            { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
            { find: '@constants', replacement: path.resolve(__dirname, 'src/constants') },
            { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
            { find: '@contexts', replacement: path.resolve(__dirname, 'src/contexts') },
            { find: '@models', replacement: path.resolve(__dirname, 'src/models') },
        ],
    },
})
