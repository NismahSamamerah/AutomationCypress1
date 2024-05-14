Feature:  practices of magento website
@focus 
    Scenario: print the name of all products In the Hot Seller Section
    Given The user navigate to magento website
    Then The products in hot seller section are available


    Scenario: add all watches with price > 50 to compare list
    Given The user navigate to magento website
    When Click on Gear menu and choose watches option
    And add all watches with price > 50 to compare list
    # Then the products will be added successfuly to the compare list


    Scenario: print all categories in the New In Womens section In What's New page
    Given The user navigate to magento website
    When Click on Whats new  
    # Then the categories in the New In Womens section are available