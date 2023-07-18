class loginPage {
    elements = {
        emailInput: () => cy.get("#user_email"),
        passwordIput: () => cy.get("#user_password"),
        loginBtn: () => cy.get("#user_login")
    }

    inputEmail(email){
        this.elements.emailInput().type(email);
    }

    inputPassword(password){
        this.elements.passwordIput().type(password);
    }

    clickOnLogin(){
        this.elements.loginBtn().click();
    }
}