// uno.config.ts
import {
  defineConfig,
  presetIcons,
  presetWind4,
  // presetAttributify,
  presetTypography
} from 'unocss'
// import { presetForms } from '@julr/unocss-preset-forms'

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
    // presetAttributify(), // required when using attributify mode
    // presetForms(),
    presetTypography()
  ],
  safelist: []
})
