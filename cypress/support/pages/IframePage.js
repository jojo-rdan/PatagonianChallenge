
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class iFramePage {

    elements = {
        iframeSection: () => cy.get("iframe.result"),
        aboutUsOption: () => cy.xpath("//a[@href='/about/index.htm']"),
        loginBtn: () => cy.get(".navbar-nav.d-lg-inline-block.nav-login")
    }

    navigateToIframe(){
        cy.iframe(this.elements.iframeSection())
            .its('0.contentDocument') 
            .its('body')
            .should('be.visible')
            .then(cy.wrap);
    }

    clickOnAboutUsOption(){
        this.elements.aboutUsOption().click();
    }

    clickOnLoginOption(){
        this.elements.loginBtn().click();
    }
}

module.exports = new iFramePage();
