const Browser = require('zombie');
const app = require('../../');

describe('User visits home page', () => {

  const browser = new Browser({ site: 'http://127.0.0.1:3000' });

  before((done) => {
    app.listen(3000, () => {
      browser.visit('/', done);
    });
  });

  it('should see a greeting', () => {
    browser.assert.text('h2', 'Hello, world!');
  });
});
