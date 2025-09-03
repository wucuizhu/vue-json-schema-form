import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'JsonForm',
      fileName: (format) => {
        if (format === 'es') return 'json-form.es.js'
        if (format === 'umd') return 'json-form.umd.js'
        return `json-form.${format}.js`
      },
      formats: ['es', 'umd']
    },
    rollupOptions: {
      external: ['vue', 'element-plus'],
      output: {
        globals: {
          vue: 'Vue',
          'element-plus': 'ElementPlus'
        }
      }
    }
  }
})