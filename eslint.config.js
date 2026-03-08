import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'
import reactPlugin from 'eslint-plugin-react'
import importPlugin from 'eslint-plugin-import'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import boundariesPlugin from 'eslint-plugin-boundaries'
import prettierConfig from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,

      reactPlugin.configs.flat?.recommended,
      jsxA11y.flatConfigs?.recommended,
      importPlugin.flatConfigs?.recommended,

      prettierConfig,
    ].filter(Boolean),

    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },

    plugins: {
      react: reactPlugin,
      import: importPlugin,
      'jsx-a11y': jsxA11y,
      boundaries: boundariesPlugin,
    },

    rules: {
      'boundaries/element-types': [
        2,
        {
          default: 'disallow',
          rules: [
            { from: 'features', allow: ['shared', 'entities'] },
            { from: 'entities', allow: ['shared'] },
            { from: 'widgets', allow: ['shared', 'features', 'entities'] },
            {
              from: 'pages',
              allow: ['widgets', 'features', 'entities', 'shared'],
            },
          ],
        },
      ],
    },

    settings: {
      react: {
        version: 'detect',
      },
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'entities', pattern: 'src/entities/*' },
        { type: 'features', pattern: 'src/features/*' },
        { type: 'widgets', pattern: 'src/widgets/*' },
        { type: 'pages', pattern: 'src/pages/*' },
        { type: 'app', pattern: 'src/app/*' },
      ],
      'import/resolver': {
        typescript: true,
      },
    },
  },
])
