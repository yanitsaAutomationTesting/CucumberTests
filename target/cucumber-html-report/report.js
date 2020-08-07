$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/GuestOrderSets.feature");
formatter.feature({
  "name": "As a user I want to be able to make an Order",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Make aa successful placement of Guest Order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.step({
  "name": "the user has navigate to iphone product page",
  "keyword": "Given "
});
formatter.step({
  "name": "the user adds the product to the cart",
  "keyword": "And "
});
formatter.step({
  "name": "the user navigates to Checkout",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on the Guest Checkout radiobutton",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on Continue button",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters first name \"\u003cfirstName\u003e\" last name \"\u003clastName\u003e\" telephone \"\u003ctelephone\u003e\" address \"\u003caddress\u003e\" city \"\u003ccity\u003e\" postcode \"\u003cpostcode\u003e\" country \"\u003ccountry\u003e\" region \"\u003cregion\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "the user enters random email",
  "keyword": "And "
});
formatter.step({
  "name": "the user clicks on Continue button",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "telephone",
        "address",
        "city",
        "postcode",
        "country",
        "region"
      ]
    },
    {
      "cells": [
        "NqkvoFirstName",
        "NqkyvLastName",
        "1234567890",
        "nqkav adress 1",
        "Mugla",
        "1234",
        "Bulgaria",
        "Yambol"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Make aa successful placement of Guest Order",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user has navigate to iphone product page",
  "keyword": "Given "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.navigateToiphonePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user adds the product to the cart",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.addToCart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user navigates to Checkout",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.goToCheckout()"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of element located by By.cssSelector: ul.pull-right div a:nth-of-type(2) (tried for 10 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027DESKTOP-VE90RS7\u0027, ip: \u002710.9.92.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.105, chrome: {chromedriverVersion: 84.0.4147.30 (48b3e868b4cc0..., userDataDir: C:\\Users\\yanit\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:65262}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1fa0b0aff5f8476c3f688af5dac3e895\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:113)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:283)\r\n\tat GuestOrderSetsStepsDef.goToCheckout(GuestOrderSetsStepsDef.java:45)\r\n\tat ✽.the user navigates to Checkout(src/test/resources/GuestOrderSets.feature:6)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "the user clicks on the Guest Checkout radiobutton",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.clickOnGuestRadioButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters first name \"NqkvoFirstName\" last name \"NqkyvLastName\" telephone \"1234567890\" address \"nqkav adress 1\" city \"Mugla\" postcode \"1234\" country \"Bulgaria\" region \"Yambol\"",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.enterStep2details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters random email",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.enterRandomEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.clickOnContinueButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});