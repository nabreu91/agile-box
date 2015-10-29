const Browser = require('zombie');
const app = require('../../');

describe('User visits home page', () => {

  const browser = new Browser({ site: 'http://127.0.0.1:3000' });

  before((done) => {
    app.listen(3000, () => {
      browser.visit('/', done);
    });
  });

  it('should see the home page', () => {
    browser.assert.text('title', 'Agile Box');
  });
/*
  describe('posts comment', () => {
    before((done) => {
      browser
        .fill('author', 'Me')
        .fill('body', 'Hey, yo!')
        .pressButton('Post', done);
    });

    it('should see the comment', function() {
      browser.assert.text('.comment', 'Hey, yo!');
    });
  });
*/
});
