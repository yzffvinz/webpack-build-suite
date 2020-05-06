
const assert = require('assert');

process.chdir(path.join(__dirname, 'smoke/template'));

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base');

  it('entry', () => {
    assert.equal(baseConfig.entry.index.indexOf(`builder-webpack/test/smoke/template/src/index/index.js`) !== -1, true);
    assert.equal(baseConfig.entry.search.indexOf(`builder-webpack/test/smoke/template/src/search/index.js`) !== -1, true);
  })
});
