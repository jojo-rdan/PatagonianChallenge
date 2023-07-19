/// <reference types ="cypress"/>

 
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class dashboardSection { 

    elements = {
        skipMobileOtp: () => cy.get('#skipMobileOtp'),
        profile: () => cy.get('#profileMenu'),
        profileEditURL: () => cy.get('.profile_edit_url')
    }

    loginWithUserToPage(){
        this.elements.skipMobileOtp().should('be.visible').wait(2000).click();
        this.elements.profile().should('be.visible').wait(2000).click();
        this.elements.profileEditURL().should('exist');
    }
}

module.exports = new dashboardSection();