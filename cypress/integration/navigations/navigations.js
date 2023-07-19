import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

const navigations = require('../../support/pages/IframePage');
const login = require('../../support/pages/loginPage');
const signUp = require('../../support/pages/createAccount');
const dashboard = require('../../support/pages/dashboardSection');

beforeEach(() => {
    cy.viewport(1600, 720);
});

Given('I open the tutorialspoint website', () => {
    cy.visit('/');
});

When('I navigate to the page under Document content goes here... section', () => {
    navigations.navigateToIframe();
});

When('I click on the About us link', () => {
    navigations.clickOnAboutUsOption();
});

Then('I should return the url of the new page', () => {
    navigations.validateAboutUsOption();
});

And('I should see a list of all URLs on the page', () => {
    navigations.listOfURLs();
});

And('I should see a list of all buttons on the page', () => {
    navigations.listOfButtons();
});

And('I should see a list of all text input fields on the page', () => {
    navigations.listOfTextInputFields();
});



When('I click on the Login button', () => {
    navigations.clickOnLoginOption();
});

Then('I click on the Sign Up option', () => {
    login.navigatingToSignUp();
});

Then('I insert the needed credententials', (table) => {
    table.hashes().forEach(row => {
        signUp.createAnAccount(row.name, row.country, row.cellphone, row.email, row.password);
    });
});

Then('I get the OTP Code', () => {
    console.log('The code is: '+ Cypress.env('codeToken'))
    signUp.getTheCode();
});

Then('I validate the OTP Code', () => {
    signUp.validateTheOTPCode();
});

Then('I should be in the Dashboard page', () => {
    signUp.loginDashboardPage();
});

Then('I should have logged into the Dashboard page with my user', () => {
    dashboard.loginWithUserToPage();
});
