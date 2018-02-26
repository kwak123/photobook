// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'check start': function test(browser) {
    // automatically uses dev Server port from /config.index.js
    // default: http://localhost:8080
    // see nightwatch.conf.js

    const server = 'localhost:3000';

    browser
      .url(server)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.profile__container')
      .assert.elementPresent('.userinfo__container')
      .assert.elementPresent('.photolist__container')
      .assert.elementPresent('.photodetail__container')
  },

  'check photoList loaded and first photo selected': function test(browser) {
    browser
      .pause(500)
      .assert.elementPresent('.photolist__inner')
      .assert.elementPresent('.photodetail__inner')
      .end();
  },
};
