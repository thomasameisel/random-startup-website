##Read Me

#User Stories

* As a user, I want to be able to enter a name of the website that will
  be generated.
* As a user, I want to be able to view a generic website for the startup
  name that I entered.
* As a user, I want to see generic stock pictures of happy people in my
  website.
* As a user, I want to see generic exciting statements and descriptions
  in my website.
* As an admin, I want to view if any errors occur on the site and
  descriptive errors of what happened.

Used http://www.1stwebdesigner.com/create-scrolling-parallax-website/ as
a template for creating the website. 

#Running Tests

  The project uses nightwatch.js to test browser automation. It currently runs tests on the Chrome browser.
  If you need to run on Firefox or IE consult this developer guide: http://nightwatchjs.org/guide#test-runner
  
  Change your directory to the test folder and run "nightwatch" in the command line to run the browser tests.
  
  The project also uses mocha to test mainly the sentence generation files. Run mocha mocha_tests.js in in the 
  command line to run these tests (in the test folder). 
  
###Note
  
  There is a simple test for randomness that calls getRandomChild() 100 times. This test will fail occasionally due
  to pure chance, but should pass most of the time.
