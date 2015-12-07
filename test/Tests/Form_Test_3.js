/**
 * Created by Taylor on 12/6/2015.
 */

module.exports = {
    'Should correctly submit form' : function(browser) {
        browser.url('localhost:3000');
        browser.waitForElementVisible('#name', 2000);
        browser.setValue('#name','A company');
        browser.setValue('#product', 'A product');
        browser.setValue('#slogan', 'He who smelt it dealt it');
        browser.setValue('#industry', 'Money');
        browser.setValue('#number', '1999');
        browser.click('#oceanImage');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/website');
        browser.getTitle(function(title) {
            this.assert.equal(title, 'A company');
        });
        browser.back(function() {
            this.pause(1000);
        });
        browser.clearValue('#name');
        browser.setValue('#name', 'Company 2');
        browser.click('#vanderbiltImage');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/website');
        browser.getTitle(function(title) {
            this.assert.equal(title, 'Company 2');
        });
        browser.back(function() {
            this.pause(1000);
        });
        browser.click('#pizzaImage');
        browser.clearValue('#name');
        browser.setValue('#name', 'Company 3');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/website');
        browser.getTitle(function(title) {
            this.assert.equal(title, 'Company 3');
        });
        browser.back(function() {
            this.pause(1000);
        });
        browser.click('#businessImage');
        browser.clearValue('#name');
        browser.setValue('#name', 'Company 4');
        browser.click('button[type=submit]');
        browser.assert.urlEquals('http://localhost:3000/website');
        browser.getTitle(function(title) {
            this.assert.equal(title, 'Company 4');
        });
        browser.end();
    }

};
