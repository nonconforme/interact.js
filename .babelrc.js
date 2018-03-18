const buildDir = `${__dirname}/build`;

module.exports = {
  "plugins": [
    ["transform-runtime", {
      helpers: true,
      polyfill: false,
      regenerator: false
    }],
    "transform-es2015-modules-commonjs",
    ["check-es2015-constants",                  { "loose": true }],
    ["transform-es2015-arrow-functions",        { "loose": true }],
    ["transform-es2015-block-scoped-functions", { "loose": true }],
    ["transform-es2015-block-scoping",          { "loose": true }],
    ["transform-es2015-classes",                { "loose": true }],
    ["transform-es2015-computed-properties",    { "loose": true }],
    ["transform-es2015-destructuring",          { "loose": true }],
    ["transform-es2015-duplicate-keys",         { "loose": true }],
    [`${buildDir}/babel-transform-for-of-array`,{ "loose": true }],
    ["transform-es2015-function-name",          { "loose": true }],
    ["transform-es2015-literals",               { "loose": true }],
    ["transform-es2015-modules-commonjs",       { "loose": true }],
    ["transform-es2015-object-super",           { "loose": true }],
    ["transform-es2015-parameters",             { "loose": true }],
    ["transform-es2015-shorthand-properties",   { "loose": true }],
    ["transform-es2015-spread",                 { "loose": true }],
    ["transform-es2015-sticky-regex",           { "loose": true }],
    ["transform-es2015-template-literals",      { "loose": true }],
    ["transform-es2015-typeof-symbol",          { "loose": true }],
    ["transform-es2015-unicode-regex",          { "loose": true }],
    ["transform-object-rest-spread"]
  ],

  "env": {
    "test": {
      "plugins": ["istanbul"]
    }
  }
}
