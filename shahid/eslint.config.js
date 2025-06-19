// eslint.config.js
import js from '@eslint/js'
import react from 'eslint-plugin-react'
import globals from 'globals'
import babelParser from '@babel/eslint-parser'

export default [
  js.configs.recommended,
  {
    files: ['**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: ['@babel/preset-react'],
        },
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'warn', // or 'off'
      'react/jsx-no-target-blank': ['warn', { enforceDynamicLinks: 'always' }],
    },
  },
]
