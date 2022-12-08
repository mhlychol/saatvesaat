module.exports = {
  customSyntax: 'postcss-html',
  extends: [
    'stylelint-config-standard',
    'stylelint-config-recommended-vue',
    'stylelint-config-prettier',
  ],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    "no-descending-specificity": null,
    "selector-pseudo-element-colon-notation": null,
    "comment-whitespace-inside": null,
    "no-duplicate-selectors": null,
    "declaration-block-single-line-max-declarations": null,
    "length-zero-no-unit": null,
    "color-hex-length": null,
    "declaration-bang-space-before": null,
    "no-irregular-whitespace": null,
    "no-empty-source": null,
    "selector-type-no-unknown": null,
    "media-feature-colon-space-after": null,
    "comment-empty-line-before": null,
    "unit-no-unknown":null,
   "block-no-empty":null,
   "font-family-no-missing-generic-family-keyword":null,
   "media-feature-colon-space-before":null,
   "rule-empty-line-before":null,
   "color-function-notation":null,
   "alpha-value-notation":null,
   "selector-class-pattern":null,
   "function-url-quotes":null,
  },
}
