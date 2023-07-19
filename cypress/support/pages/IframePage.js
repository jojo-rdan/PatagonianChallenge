
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class iFramePage {

    elements = {
        iframeSection: () => cy.get("iframe.result"),
        aboutUsOption: () => cy.xpath("//a[@href='/about/index.htm']").first(),
        loginBtn: () => cy.get(".btn.mb-0"),
    }

    navigateToIframe(){
        this.elements.iframeSection()
            .its('0.contentDocument') 
            .its('body')
            .should('be.visible')     
            .then(cy.wrap)  
    }

    clickOnAboutUsOption(){
        this.elements.aboutUsOption().click();

    }

    validateAboutUsOption(){
        cy.url().should('eq', 'https://www.tutorialspoint.com/about/index.htm');
    }

    clickOnLoginOption(){
        this.elements.loginBtn().first()
        .should('contain.text', 'Login')
        .click().wait(2000);
    }

    listOfURLs(){
        cy.get('a[href]').each((item) => {
            cy.log('URL:' + item.prop('href'))
            console.log('URL: ' + item.prop('href'));

        })
    }

    listOfButtons(){
        cy.get('.btn').each((btn) => {
            cy.log('Button: ' + btn.prop('href'))
            console.log('Button: ' + btn.prop('href'));
        })
    }

    listOfTextInputFields(){
        cy.get('input.form-control').each((input) => {
            cy.log('Text Input Field: ' + input.prop('href'))
            console.log('Text Input Field: ' + input.prop('href'));
        })
    }
}

module.exports = new iFramePage();
