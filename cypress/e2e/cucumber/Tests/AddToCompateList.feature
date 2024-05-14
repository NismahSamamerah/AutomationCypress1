Feature: add to compare list functionality

    Scenario: Validate that the user can add product to the compare list
    Given The user navigate to magento website
    # And the user hover over gear link 
    And the user select watches option
    When the user click on add to compare icon 
    Then The product will be added to compare list successfuly 