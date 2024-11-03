import globals from 'globals';
import pluginJs from '@eslint/js';
import daStyle from 'eslint-config-dicodingacademy';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  daStyle,
  {
    rules: {
      'no-console': 'off',
      'no-unused-vars': ['error', { vars: 'all', args: 'after-used', argsIgnorePattern: '^_' }],
      'no-undef': 'off',
    },
  },
];