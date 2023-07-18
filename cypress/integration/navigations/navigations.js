import {Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

const navigations = require('../../support/pages/IframePage');

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

