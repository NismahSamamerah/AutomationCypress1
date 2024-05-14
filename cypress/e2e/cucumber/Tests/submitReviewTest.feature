Feature: Submit Review Functionality

    Scenario: Validate that the user can review the products
    Given The user navigate to magento website
    And The user type product name in the search feild
    # And The user click on specific product
    And The user click on reviews button
    When The user click on reviews in button
    And The user type rating  
    And The user type Nickname in Nickname field
    And The user type Summery in Summery field
    And The user type Review in Nickname Review
    And The user click  on Submit Review
    Then the review will be Submited