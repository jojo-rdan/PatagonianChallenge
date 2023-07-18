Feature: Manage basic interactions

    As a visitor
    I want to navigate through the website and Log in
    So I'm always able to manage the website correctly

    Scenario: Check URL and navigate to Document Content
        Given I open the tutorialspoint website
        When I navigate to the page under Document content goes here... section
        When I click on the About us link
        Then I should return the url of the new page
        And I should see a list of all URLs on the page
        And I should see a list of all buttons on the page
        And I should see a list of all text input fields on the page

    Scenario Outline: Log In funcionality
        Given I am on the login page
        When I enter "<email>" and "<password>"
        And I click the login button
        Then I should see the "<message>"

        Examples:
        | email        | password    | message          |
        | $EMAIL1      | $PASSWORD1  | Welcome, User1!  |
        | $EMAIL2      | $PASSWORD2  | Welcome, User2!  |
        | $EMAIL3      | $PASSWORD3  | Welcome, User2!  |