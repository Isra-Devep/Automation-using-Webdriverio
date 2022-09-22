
@regression @search
Feature: A signed out user purchases item(s) from a designated store and verifies that the order is successfully sent.
        Scenario: Verify that Google is opened and cricinfo is searched

        Given User opens the Open market application and confirms that he is not signed in
        Then User locates the store they wish to purchase from and opens it
        Then User locates the merchandise they want to purchase and confirms that they are available
        Then User adds the items to the cart and confirms that the cart is updated
        Then Cart is updated then the user adds more items to the cart and verifies the cart again
        Then User clicks on the cart button to, adds a tip, verifies total bill and continues to payment
        Then The user clicks on the payment button
        Then the user adds a credit card and clicks confirm payment
        When The payment is processed the user confirms the information is correct
