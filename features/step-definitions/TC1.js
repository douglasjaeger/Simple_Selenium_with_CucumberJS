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
    //.withCapabilities(webdriver.Capabilities.chrome())
    //.setChromeOptions(options)
    .build();    
  })
  After( function() {
    driver.quit();
  })

     Given('usuario acessa menu de cadastro', function () {       
      driver.get("http://publicazo.insprak.com/sign_in")
      driver.manage().window().setRect({ width: 1382, height: 736 })
      driver.findElement(By.linkText("Cadastre-se")).click()
     });


     Then('o sistema exibe uma mensagem de sucesso', function () {       
       driver.findElement(By.id("user_fullname")).sendKeys("antonio")
       driver.findElement(By.id("user_email")).sendKeys("antonio@gmail.com")
       driver.findElement(By.id("user_password")).sendKeys("123456")
       driver.findElement(By.id("user_password_confirmation")).sendKeys("123456")
       driver.findElement(By.name("commit")).click()
     });

     When('preenche campos nome,email,senha e confirmacao', function () {       
        assert( driver.findElement(By.css(".toast-message")).getText() == "Bem-vindo! Você se registrou com sucesso.")  
      });


   