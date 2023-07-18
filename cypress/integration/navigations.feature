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
