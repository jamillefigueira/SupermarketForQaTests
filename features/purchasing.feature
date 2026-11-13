
Feature: Supermarket purchasing flow

  As a customer
  I want to search for products and add them to my cart
  So that I can purchase groceries online

  Scenario Outline: Search and purchase a product

    Given I am on the supermarket website
    When I search for "<product>"
    Then I should see the product "<product>" with price "<price>"
    When I open the product details
    Then the product name should be "<product>"
    And the product price should be "<price>"
    When I add the product to the cart
    Then the cart should contain "<product>" with price "<price>"

    Examples:
      | product     | price |
      | Canned Soup | 0.49  |
      | Cherry Soda | 0.99  |
