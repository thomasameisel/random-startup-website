/**
 * Created by Taylor on 12/7/2015.
 */

module.exports = {
    //'@disabled':true,
    'All websites should display correct/valid outputs' : function(browser) {
        browser.url('localhost:3000');
        browser.waitForElementVisible('#name', 2000);
        browser.setValue('#name','A company');
        browser.setValue('#product', 'A product');
        browser.setValue('#slogan', 'He who smelt it dealt it');
        browser.setValue('#industry', 'Money');
        browser.setValue('#number', '1999');
        browser.click('#oceanImage');
        browser.pause(2000);
        var y = 1;
        //inspects each page to ensure text is present
        while(y < 6) {
            //input konami code in order to reveal hidden page selector
            browser.keys([browser.Keys.ARROW_UP, browser.Keys.ARROW_UP, browser.Keys.ARROW_DOWN, browser.Keys.ARROW_DOWN
                ,browser.Keys.ARROW_LEFT, browser.Keys.ARROW_RIGHT, browser.Keys.ARROW_LEFT, browser.Keys.ARROW_RIGHT, 'b', 'a']);
            browser.acceptAlert();
            browser.clearValue('#websiteNumber');
            browser.setValue('#websiteNumber', y);
            browser.click('button[type=submit]');
            browser.waitForElementVisible('#slogan', 3000);
            browser.expect.element('#slogan').to.be.visible;
            browser.expect.element('#aboutUs').text.to.not.equal('');
            browser.expect.element('#slogan').text.to.not.equal('');
            browser.expect.element('#whatWeDo').text.to.not.equal('');
            browser.expect.element('#whyChooseUs').text.to.not.equal('');
            browser.expect.element('#ourHistory').text.to.not.equal('');
            if (y != 4) {
                browser.expect.element('#careers').text.to.not.equal('');
            }
            y++;
            browser.back();
        }
        browser.end();
    }
};
