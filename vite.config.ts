import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Unocss from 'unocss/vite'
import { presetAttributify, presetUno, presetIcons } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Unocss({
      presets: [presetAttributify(), presetUno(), presetIcons()],
      rules: [
        ['c-bg-grey', { 'background-color': '#F9F9F9' }],
        ['c-bg-purple', { 'background-color': '#6956E5' }],
        ['c-bg-light-purple', { 'background-color': '#ECEAFE' }],
        ['c-bg-light-orange', { 'background-color': '#FFF0E6' }],
        ['c-bg-light-blue', { 'background-color': '#E5F7FF' }],
        ['c-bg-light-grey', { 'background-color': '#C4C4C4' }],
        ['c-color-purple', { color: '#6956E5' }],
        ['c-color-orange', { color: '#FB896B' }],
        ['c-color-heading', { color: '#000000' }],
        ['c-color-tip', { color: '#787486' }],
        ['c-color-nav', { color: '#878787' }],
        ['c-bar-border', { border: '1px solid #E6E8EC' }],
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    open: true,
  },
})
