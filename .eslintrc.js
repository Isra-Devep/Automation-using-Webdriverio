/**
 * DO NOT MAKE CHANGES TO THIS FILE.
 * Please bring proposed changes to the front-end sync meeting:
 *  https://www.notion.so/1mapp/Front-end-Sync-Meeting-Notes-f2f2bd8f450442d7baf1b34d8fa01b4b
 * Or contact Fox on Slack:
 *  https://onemarkettalk.slack.com/team/U043YCR7X50
 */

module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'airbnb-typescript',
    'plugin:react/jsx-runtime',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    page: true,
  },
  rules: {
    // rules for line length / spacing / syntax placement should be handled by prettier
    'implicit-arrow-linebreak': 'off',
    'linebreak-style': 'off',
    'nonblock-statement-body-position': 'off',
    'max-len': 'off',
    'operator-linebreak': 'off',
    'object-curly-newline': 'off',
    'function-paren-newline': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/quotes': 'off',
    '@typescript-eslint/naming-convention': 'warn',
    'react/jsx-indent': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-curly-newline': 'off',
    'no-confusing-arrow': 'off',
    'no-spaced-func': 'off',
    'func-call-spacing': 'off',
    'no-trailing-spaces': 'off',
    'max-lines': 'off',
    'no-console': 'error',
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message:
          'for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.',
      },
      {
        selector: 'LabeledStatement',
        message:
          'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message:
          '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
    ],
    'spaced-comment': [
      'error',
      'always',
      {
        markers: ['/**'],
      },
    ],
    'import/extensions': 'off',
    'import/order': 'off',
    // handled by https://www.npmjs.com/package/prettier-plugin-organize-imports
    'import/no-extraneous-dependencies': 'off',
    // To be set to 'error' once umi is removed
    'no-unreachable': 'error',
    'react/jsx-key': [
      'error',
      {
        checkFragmentShorthand: true,
        checkKeyMustBeforeSpread: true,
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-no-useless-fragment': [
      'error',
      {
        allowExpressions: true,
      },
    ],
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: false,
        assignment: false,
      },
    ],
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-no-duplicate-props': [
      'error',
      {
        ignoreCase: false,
      },
    ],
    'react/no-direct-mutation-state': 'error',
    'react/no-multi-comp': 'off',
    'react/no-unsafe': 'error',
    'react/require-default-props': 'off',
    'react-hooks/exhaustive-deps': [
      'error',
      {
        additionalHooks:
          '(useCreation|useIsomorphicLayoutEffect|useUpdateEffect|useUpdateLayoutEffect|useAsyncEffect|useDebounceEffect|useThrottleEffect|useDeepCompareEffect|useDeepCompareLayoutEffect|useTrackedEffect)',
      },
    ],
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
  },
};
