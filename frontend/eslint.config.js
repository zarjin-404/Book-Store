// eslint.config.js
module.exports = {
  root: true,
  parser: '@babel/eslint-parser', // Use Babel ESLint parser
  parserOptions: {
    ecmaVersion: 2021, // Supports modern ECMAScript features
    sourceType: 'module', // Allows 'import' and 'export'
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
  },
  env: {
    browser: true, // For browser global variables
    es2021: true,
    node: true, // For Node.js global variables
  },
  extends: [
    'eslint:recommended', // Basic ESLint rules
    'plugin:react/recommended', // React-specific linting rules
    'plugin:react-hooks/recommended', // React hooks-specific linting
    'plugin:jsx-a11y/recommended', // Accessibility linting
    'plugin:import/errors', // Import/export linting
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier', // Prettier integration to avoid rule conflicts
  ],
  plugins: ['react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'react/prop-types': 'off', // Turn off prop-types if using TypeScript
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignore unused variables starting with "_"
    'import/order': [
      'error',
      {
        groups: [
          ['builtin', 'external'],
          'internal',
          ['parent', 'sibling', 'index'],
        ],
        'newlines-between': 'always',
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'], // Resolve these file extensions
      },
    },
  },
};
