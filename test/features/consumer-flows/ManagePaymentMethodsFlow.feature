@regression @search
Feature: A user wants to manage their payment methods.

        # Scenario 1:
        Scenario:  A Signed-in user adds a new payment method to their account. 
                Given The user open the via application and signs in
                Then The user confirms they are in buying mode or enters the buying mode
                When The user clicks the Payment method button and access the payment methods
                