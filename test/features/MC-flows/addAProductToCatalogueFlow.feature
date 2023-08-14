@regression
Feature: A user wants to add a product to their store

        # Scenario 1:
        Scenario:  A user signs into the merchant store and adds an active product to the catalogue. 
                Given The User opens the via application and signs in
                When The user opens the Products page from the hamburger menu
                Then The user will be able to access the products page
                When The user clicks the add new item button
                Then The user will be able to see the add product page
                When The user adds the product info
                Then The user will be able to add the product to the catalogue
                