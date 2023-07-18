Feature: Access feature

    As an user
    This feature is required for a user to create an account and login

    Scenario: Sing In and Log In funcionality
        When I click on the Login button
        Then I click on the Sign Up option
        Then I insert <name>, <counrty>, <cellphone>, <email>, <password>   
        Then I get the OTP Code
        Then I validate the OTP Code
        Then I should be in the Dashboard page
        Then I should have logged into the Dashboard page with my user
        