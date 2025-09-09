// uno.config.ts
import { defineConfig, presetIcons, presetWind4, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true
      }
    }),
    presetIcons({
      extraProperties: {
        display: 'inline-block',
        'vertical-align': 'middle'
        // ...
      }
    }),
    presetTypography()
  ],
  safelist: []
})
