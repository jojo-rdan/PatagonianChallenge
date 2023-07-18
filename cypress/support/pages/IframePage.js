class iFramePage {

    elements = {
        iframeSection: () => cy.get("iframe[src$='/html/menu.htm']"),
        aboutUsOption: () => cy.xpath("//a[@href='/about/index.htm']"),
        loginBtn: () => cy.get(".navbar-nav.d-lg-inline-block.nav-login")
    }

    clickOnAboutUsOption(){
        this.elements.aboutUsOption().click();
    }

    clickOnLoginOption(){
        this.elements.loginBtn().click();
    }
}

module.exports = new iFramePage();
