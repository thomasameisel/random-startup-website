/**
 * Created by Taylor on 12/5/2015.
 */

module.exports = {
    "Main page test" : function (browser) {
        browser
            .url('localhost:3000')
            .waitForElementVisible('body',2000)
            .assert.containsText('footer', 'Running on Node with Express, Jade, and Stylus')
            .assert.containsText('header', 'Startup Website Generator')
            .assert.elementPresent('#images')
            .end();
    }
}