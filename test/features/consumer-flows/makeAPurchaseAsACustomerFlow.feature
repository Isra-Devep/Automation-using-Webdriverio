@regression @search
Feature: A user wants to make a purchase from the application.

        # Scenario 1:
        Scenario:  A Signed-in user purchases an item(s) from a drop using pickup mode. 
                Given The user open the via application and opens the drop he wanted to shop at
                Then The user confirms that the drop is open and the order can be placed. 
                When The user adds the items with no variants to the cart and confirms that the cart is updated
                Then The user clicks on the cart button, verifies total bill without shipping fees
                Then The user clicks on the delivery method and sees all pickup locations
                When The user selects a pickup location and clicks confirm
                Then The bill remains the same no Shipping fee is added
                When The user clicks on the How you'll pay button
                Then The user can select payment method
                # When The user adds a new debit card
                # Then The card is automatically selected
                When The user clicks Submit Order button, the order is submitted
                Then The user can verify that the details of the order submission are correct
                