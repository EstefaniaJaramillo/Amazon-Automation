Feature: Check the product description on Amazon

@test
Scenario: The user checks the description of an Amazon product
    Given The user enters the product page
    #When The user searches for the product: "GALAX GeForce RTX™ 4070 Ti EX Gamer V2"
    When The user looks for "About this iterm" section
   # Then The user finds the product with desired specifications
        |   RAMSize |   12GB            |
        |   brand   |   Samsung         |
    And The product description should contain "5" bullets
    And the total price should be equal to the sum of: product price plus the import fees