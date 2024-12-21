// @ts-check
import pluginVue from 'eslint-plugin-vue'
import withNuxt from './.nuxt/eslint.config.mjs'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

/**
 * @type {import('eslint').Linter.Config[]}
 */
const vueRules = [
  ...pluginVue.configs['flat/recommended'],
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/padding-line-between-blocks': ['error'],
      'vue/html-self-closing': [
        'error',
        { html: { component: 'always', void: 'always' } },
      ],
      'vue/block-order': [
        'error',
        {
          order: ['script', 'template', 'style'],
        },
      ],
    },
  },
]

export default withNuxt(eslintPluginPrettierRecommended, vueRules)
