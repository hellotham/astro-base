import eslintPluginAstro from 'eslint-plugin-astro'
import * as mdx from 'eslint-plugin-mdx'
import markdown from '@eslint/markdown'
import unocss from '@unocss/eslint-config/flat'

export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  ...eslintPluginAstro.configs['flat/jsx-a11y-recommended'],
  { ...mdx.flat },
  {
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    language: 'markdown/commonmark',
    rules: {
      'markdown/no-html': 'error'
    }
  },
  unocss
]
