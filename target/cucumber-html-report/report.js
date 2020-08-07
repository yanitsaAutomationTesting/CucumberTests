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
  "name": "the user clicks on Continue button in Billing Details",
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
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the Guest Checkout radiobutton",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.clickOnGuestRadioButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Continue button",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.clickOnContinueButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters first name \"NqkvoFirstName\" last name \"NqkyvLastName\" telephone \"1234567890\" address \"nqkav adress 1\" city \"Mugla\" postcode \"1234\" country \"Bulgaria\" region \"Yambol\"",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.enterStep2details(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters random email",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.enterRandomEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Continue button in Billing Details",
  "keyword": "And "
});
formatter.match({
  "location": "GuestOrderSetsStepsDef.theUserClicksOnContinueButtonInBillingDetails()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});