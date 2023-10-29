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

     Given('usuario acessa a pagina inicial', function () {       
       driver.get("http://publicazo.insprak.com/")
       driver.manage().window().setRect({ width: 1382, height: 736 })
       driver.findElement(By.css(".panel-heading > a > img")).click()       
       driver.findElement(By.css(".img-circle")).click()
       driver.findElement(By.linkText("Sair")).click()
       assert( driver.findElement(By.css(".toast-message")).getText() == "Saiu com sucesso.")
     });


     Then('preenche campos email,senha e botao Entrar', function () {       
       driver.findElement(By.linkText("Entrar")).click()
       driver.findElement(By.id("user_email")).click()
       driver.findElement(By.id("user_email")).sendKeys("antonio@gmail.com")
       driver.findElement(By.id("user_password")).click()
       driver.findElement(By.id("user_password")).sendKeys("123456")
       driver.findElement(By.name("commit")).click()
     });

     When('preenche campos nome,email,senha e confirmacao', function () {       
      assert( driver.findElement(By.css(".toast-message")).getText() == "Logado com sucesso.")
      driver.findElement(By.css(".panel-heading > a > img")).click()  
      });