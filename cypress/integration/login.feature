Feature: Login feature

    As an user
    This feature is required for a user to Login

    Scenario Outline: Log In funcionality
        Given I am on the login page
        When I enter "<email>" and "<password>"
        And I click the login button
        Then I should see the "<message>"

        Examples:
        | email            | password          | message          |
        | user1@test.com   | passworduser1123  | Welcome, User1!  |
        | user2@test.com   | passworduser2123  | Welcome, User2!  |
        | user3@test.com   | passworduser3123  | Welcome, User2!  |
        