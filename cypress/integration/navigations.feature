Feature: Manage basic interactions

    As a visitor
    I want to navigate through the website and Log in
    So I'm always able to manage the website correctly

    Background:
        Given I open the tutorialspoint website

        Scenario: Check URL and navigate to Document Content

            When I navigate to the page under Document content goes here... section
            When I click on the About us link
            Then I should return the url of the new page
            And I should see a list of all URLs on the page
            And I should see a list of all buttons on the page
            And I should see a list of all text input fields on the page

        Scenario: Sing In and Log In funcionality
            When I click on the Login button
            Then I click on the Sign Up option
            Then I insert the needed credententials
                | name        |  country        |  cellphone |             email              | password  |
                | Roger Waters| Colombia (+57)  | 3158598808 | trageiyougrowo-2423@yopmail.com|  lorem123 |
            Then I get the OTP Code
            Then I validate the OTP Code
            Then I should be in the Dashboard page
            Then I should have logged into the Dashboard page with my user