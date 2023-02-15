module.exports = {
  plugins: ['vitest'],
  rules: {
    'vitest/no-identical-title': 'error',
    'vitest/prefer-lowercase-title': [
      'warn',
      {
        ignoreTopLevelDescribe: true,
      },
    ],
    'vitest/consistent-test-it': [
      'warn',
      {
        fn: 'it',
        withinDescribe: 'it',
      },
    ],
  },
}
