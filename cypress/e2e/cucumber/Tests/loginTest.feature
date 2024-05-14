Feature: login functionality

    Scenario: Validate that the user can login using valid email and password
    Given The user navigate to magento website
    When The user type email in email input field
    And The user type password in password input field
    And The user click on sign in button
    Then The user will redirected to my account page 