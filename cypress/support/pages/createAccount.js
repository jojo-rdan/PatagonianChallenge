
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  });

class createAccount {
    elements = {
        fullNameInput: () => cy.get("#textRegName"),
        countryCode: () => cy.get("country_code"),
        cellPhone: () => cy.get("#phone"),
        email: () => cy.get("input#textSRegEmail"),
        password: () => cy.get("input#user_password"),
        loginButton: () => cy.get("button#signUpNew")
    }

    createAnAccount(fullName, countryCode, cellPhone, email, password){
        this.elements.fullNameInput().type(fullName),
        this.elements.countryCode().select(countryCode).should('have.value', '57'),
        this.elements.cellPhone().type(cellPhone),
        this.elements.email().type(email),
        this.elements.password().type(password)

        cy.visit('https://yopmail.com/es/');
        cy.origin('https://yopmail.com/es/', { args: sentArg }, ({ email }) => { 
            cy.reload()
            cy.get(".ycptinput").should('be.visible');
            cy.get('input.ycptinput').clear().type(email);
            cy.get('#refreshbut').click().wait(1000) 

            cy.get('iframe#ifinbox')
                .its('0.contentDocument') 
                .its('body')
                .should('be.visible')     
                .then(cy.wrap).find('.lms')
                .contains("Signup One Time Password (OTP)")

        
            cy.get('iframe#ifmail')
                .its('0.contentDocument')
                .its('body')
                .should('be.visible')  
                .then(cy.wrap).contains(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6}$/i)
        
            cy.get('iframe#ifmail')
            .its('0.contentDocument')
            .its('body')
            .should('be.visible')  
            .then(cy.wrap).contains(/^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z\d]{6}$/i).then(($btn) => {
                const code = $btn.text();
                Cypress.env('codeToken', code)
                cy.log('The new OTP code is: ' + code);
                cy.log(Cypress.env('codeToken'))
                cy.go('back')
                 
           });  
           cy.go('back')
           cy.reload()
        })  
    }

    getTheCode() {     
        cy.get('div#emailOtpValidator').should('exist')
        cy.get('input#txtEmailValidateOTP').wait(2000)
        .clear({force: true}).type(Cypress.env('codeToken'), {force: true});
        cy.log('The code is: '+ Cypress.env('codeToken') ) 
    }

    validateTheOTPCode(){
        cy.get('a#validateEmailOtp').click({force: true});
    }

    loginDashboardPage(){
        cy.get('.toast-success').should('be.visible');
        cy.get('a#verified_email').should('be.visible');
        cy.get('#user_password').clear().type(Cypress.env('password'));
        cy.get('#signUpNew').click()
    }

}

module.exports = new createAccount();