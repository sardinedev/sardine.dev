const rollup = require('rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const { terser } = require('rollup-plugin-terser');

const extensions = ['.js', '.ts'];

module.exports = function (file, callback) {
  if (!file) {
    console.error(`11ty Rollup : There's no Javascript file to be processed.`);
    callback();
  }

  const inputOptions = {
    input: file,
    plugins: [
      resolve({ extensions }),
      babel({
        extensions,
        exclude: 'node_modules/**', // only transpile our source code
      }),
      terser({ ecma: 8, module: true }),
    ],
  };

  const outputOptions = {
    dir: '_site/assets/scripts',
    format: 'esm',
    entryFileNames: '[name]-[hash].js',
  };

  rollup
    .rollup(inputOptions)
    .then((bundle) => bundle.write(outputOptions))
    .then((result) => {
      callback(null, `/assets/scripts/${result.output[0].fileName}`);
    });
};
