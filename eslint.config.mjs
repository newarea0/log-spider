import antfu from '@antfu/eslint-config'

export default antfu({
  rules: {
    'antfu/if-newline': 'off',
    'style/brace-style': 'off',
    'style/object-curly-spacing': 'off',
    'object-curly-spacing': ['error', 'always', { arraysInObjects: false, objectsInObjects: false }],
  },
})
