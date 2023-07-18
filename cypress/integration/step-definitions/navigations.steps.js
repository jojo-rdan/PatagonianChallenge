import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

Given('I open the tutorialspoint website', () => {
    cy.visit('/');
});

And('I navigate to the {string} section', text => {
    
});

When('')
