@regression @search
Feature: A user wants to manage their payment methods.

        # Scenario 1:
        Scenario:  A Signed-in user adds a new visa payment method to their account. 
                Given The user open the via application and signs in
                Then The user confirms they are in buying mode or enters the buying mode
                When The user clicks the Payment method button and access the payment methods
                Then The user clicks on the Add credit or debit card option
                When The user adds info for a new visa card and saves it
                #Then That card will now be saved
                 