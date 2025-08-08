import antfu from '@antfu/eslint-config'

export default antfu(
  {
    ignores: ['**/*.md'],
  },
  {
    rules: {
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
      'vue/component-tags-order': ['error', {
        order: ['template', 'script', 'style'],
      }],
      'vue/block-order': 'off',
    },
  },
)
