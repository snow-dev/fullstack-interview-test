
import path from 'path';
import glob from 'glob';

const test = path.join(process.env.ROOT_PATH, 'tests')
console.debug("Test directory: ", test)

glob.sync(`${test}/**/*.test.js`).forEach(file => {
	require(path.resolve(file))
})