module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],

  rules: {
    'eqeqeq': ['error', 'always'], // Solo triple igual
    'no-implicit-coercion': 'error',
    'no-empty-function': 'error', // No funciones vacias
    '@typescript-eslint/no-explicit-any': 'error', // no permitir any
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
};
