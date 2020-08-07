Feature: As a user I want to be able to make an Order
@regression
  Scenario Outline: Make aa successful placement of Guest Order
    Given the user has navigate to iphone product page
    And the user adds the product to the cart
    And the user navigates to Checkout
    And the user clicks on the Guest Checkout radiobutton
    And the user clicks on Continue button
    And the user enters first name "<firstName>" last name "<lastName>" telephone "<telephone>" address "<address>" city "<city>" postcode "<postcode>" country "<country>" region "<region>"
    And the user enters random email
    And the user clicks on Continue button in Billing Details

    Examples:
    |firstName      | lastName      | telephone|address         |city   |postcode |country  |region|
    |NqkvoFirstName |NqkyvLastName  |1234567890| nqkav adress 1 |Mugla  |1234     |Bulgaria |Yambol|









