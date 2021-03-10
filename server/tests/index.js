import env from 'env';  // eslint-disable-line
import path from 'path';
import glob from 'glob';

console.debug("Test directory: ", test)
const test = path.join(process.env.ROOT_PATH, 'tests')

glob.sync(`${test}/**/*.test.js`).forEach(file => {
	require(path.resolve(file))
})