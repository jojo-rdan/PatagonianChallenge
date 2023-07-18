class loginPage {
    elements = {
        emailInput: () => cy.get("#user_email"),
        passwordIput: () => cy.get("#user_password"),
        loginBtn: () => cy.get("#user_login"),
        singUpBtn: () => cy.get("a[href='signup.jsp']")
    }

    loginProcess(email, password){
        this.elements.emailInput().type(email);
        this.elements.passwordIput().type(password);
        this.elements.loginBtn().click();
    }

    navigatingToSignUp(){
        this.elements.singUpBtn().click();
    }

}

module.exports = new loginPage();
