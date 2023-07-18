
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class iFramePage {

    elements = {
        iframeSection: () => cy.get("iframe.result"),
        aboutUsOption: () => cy.xpath("//a[@href='/about/index.htm']").first(),
        loginBtn: () => cy.get(".navbar-nav.d-lg-inline-block.nav-login"),
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

    validateAboutUsOption(){
        cy.url().should('eq', 'https://www.tutorialspoint.com/about/index.htm');
    }

    clickOnLoginOption(){
        this.elements.loginBtn().click();
    }

    listOfURLs(){
        cy.get('a').each(($a) => {
            const url = $a.attr('href');
            if(url){
                console.log('URL:', url);
            }
        })
    }

    listOfButtons(){
        cy.get('button').each(($button) => {
            const button = $button.text();
            console.log('Button:', button);
        })
    }

    listOfTextInputFields(){
        cy.get('input[type="text"]').each(($input) => {
            const inputName = $input.attr('name');
            console.log('Text Input Field:', inputName);
        })
    }
}

module.exports = new iFramePage();
