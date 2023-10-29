const {Given, Then, When, Before, After} = require('@cucumber/cucumber')
const webdriver = require('selenium-webdriver');
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

//SETUP CHROME DRIVER
var chrome = require('chromedriver');
//var options   = new chrome.Options().headless();

// SETUP FIREFOX DRIVER 
 const firefox = require('geckodriver');

 let driver

Before(function () {

  let browser = process.env.BROWSER;
  if (browser == 'firefox') { browser = 'firefox'; }
  if (browser == 'chrome') { browser = 'chrome'; }

    driver =  new Builder()
    .forBrowser(browser)
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();    
  })
  After( function() {
    driver.quit();
  })


Given('usuario acessa menu de cadastro novamente, {string}', {timeout: 30 * 1000}, function(browser) {  
    
  // if (browser == 'firefox') { browser = 'firefox'; }
  // if (browser == 'chrome') { browser = 'chrome'; }

    driver =  new Builder()
    .forBrowser(browser)
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();    

    driver.get("http://publicazo.insprak.com/sign_in  ")
    driver.manage().window().setRect({ width: 1364, height: 718 })
       
          });

  When('preenche campos com exemplos {string},{string},{string} e confirmacao', {timeout: 30 * 1000}, function (string, string2, string3) {
    driver.findElement(By.id("user_fullname")).sendKeys('string')
    driver.findElement(By.id("user_email")).sendKeys('string')
    driver.findElement(By.id("user_password")).sendKeys('string')
    driver.findElement(By.id("user_password_confirmation")).sendKeys('string')
    driver.findElement(By.name("commit")).click()
        
          });

Then('o sistema exibe uma mensagem de sucesso para cada exemplo', {timeout: 30 * 1000}, function () {
  assert( driver.findElement(By.css(".toast-message")).getText() == "Bem-vindo! Você se registrou com sucesso.")
    
    
          });
