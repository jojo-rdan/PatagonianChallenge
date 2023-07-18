import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

const navigations = require('../../support/pages/IframePage');
const login = require('../../support/pages/loginPage');

beforeEach(() => {
    cy.viewport(1600, 720);
});

Given('I am on the login page', () => {
    cy.visit('/');
    navigations.clickOnLoginOption();
});

When('I enter {string} and {string}', (email, password) => {
    login.inputEmail(email);
    login.inputPassword(password);
})

And('I click the login button', () => {
    login.clickOnLogin();
})

Then('I should see the {string}', (msg) => {

})