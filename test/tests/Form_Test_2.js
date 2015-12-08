/**
 * Created by Taylor on 12/6/2015.
 */

module.exports = {
    //'@disabled': true,
    'Should not submit form test' : function(browser) {
        //URL should always be http://localhost:3000/
        //various cases of incomplete forms where the URL should not change
        browser.url('localhost:3000');
        browser.waitForElementVisible('#name', 2000);
        browser.assert.containsText('#name', '');
        browser.assert.containsText('#product', '');
        browser.assert.containsText('#slogan','');
        browser.assert.containsText('#industry','');
        browser.assert.containsText('#number','');
        browser.expect.element('#ocean').to.not.be.selected;
        browser.expect.element('#vanderbilt').to.not.be.selected;
        browser.expect.element('#pizza').to.not.be.selected;
        browser.expect.element('#business').to.not.be.selected;
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/');
        browser.setValue('#name','The Company');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/');
        browser.click('#oceanImage');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/');
        browser.setValue('#product','A product');
        browser.setValue('#slogan', 'An eye for an eye makes the whole world blind');
        browser.setValue('#industry', 'An industry');
        browser.click('button[type=submit]');
        browser.end();
    }
}
