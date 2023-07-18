Feature: Manage basic interactions

    As a visitor
    I want to navigate through the website and Log in
    So I'm always able to manage the website correctly

    Scenario: Check URL and navigate to Document Content
        Given I open the tutorialspoint website
        And I navigate to the "Document content goes here..." section
        When I interact with the About us link
        Then I should return the url of the new page