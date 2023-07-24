@regression @search
Feature: A user purchases items from a store
        Scenario:  A user signs into the merchant store and adds a prodcut to the catalgoue. 
        Given User opens the via application and checks he's not signed in
        When The user tries to login using the given credentials
        Then Verify the user has signed in
        When The user opens the Products page from the hamburger menu
        Then The user will be able to access the products page
        When The user click the add new item button
        Then The user will be able to add the product after adding the product info
        When The user click the add new item button