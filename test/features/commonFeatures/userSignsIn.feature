@regression 
Feature: A user wants to signIn to the via application.
        @consumer 
        # Scenario 1:
        Scenario:  The user wants to signs in to the application as a customer 
                Given The user open the via application and signs in as a customer
        @merchant 
        # Scenario 1:
        Scenario:  The user wants to signs in to the application as a merchant 
                Given The user open the via application and signs in as a merchant
        @reseller 
        # Scenario 1:
        Scenario:  The user wants to signs in to the application as a reseller 
                Given The user open the via application and signs in as a reseller