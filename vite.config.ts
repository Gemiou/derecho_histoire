import { fileURLToPath, URL } from 'node:url'

import UnoCSS from '@unocss/vite'
import vue from '@vitejs/plugin-vue'

import {

  presetUno,
  presetAttributify,
  presetWebFonts

} from 'unocss'
import { COLOR_PALETTE } from './theme/palette'
import { TYPOGRAPHY } from './theme/typography'

export default {
  plugins: [
    vue(),
    UnoCSS({
      theme: {
        breakpoints: {
          xs: '320px',
          sm: '640px',
          md: '768px',
        },
        colors: COLOR_PALETTE,
      },
      presets: [
        presetAttributify(), // required if using attributify mode
        presetUno(),
        presetWebFonts({
          fonts: {
            sans: 'Roboto',
          }
        })
      ],
      shortcuts: [TYPOGRAPHY]
    }),
  ],
}