/**
 * Created by Taylor on 12/5/2015.
 */

module.exports = {
    //'@disabled':true,
    "Form page and radio buttons test" : function (browser) {
        browser.url('localhost:3000');
        browser.waitForElementVisible('body',2000);
        browser.assert.containsText('header', 'Startup Website Generator');
        browser.assert.elementPresent('#images');
        browser.assert.elementPresent('#vanderbilt');
        browser.click('#vanderbiltImage');
        browser.pause(2000);
        browser.expect.element('#vanderbilt').to.be.selected
        browser.click('#oceanImage');
        browser.expect.element('#ocean').to.be.selected;
        browser.expect.element('#vanderbilt').to.not.be.selected;
        browser.expect.element('#pizza').to.not.be.selected;
        browser.expect.element('#business').to.not.be.selected;
        browser.end();
    }
};