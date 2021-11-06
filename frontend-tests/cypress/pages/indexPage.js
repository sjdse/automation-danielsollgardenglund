/// <reference types="cypress" />

const loginPageTitle = 'Testers Hotel'
const usernameTextField = ':nth-child(1) > input'
const passwordTextField = ':nth-child(2) > input'
const submitBtn = '.btn'
const formLabel = 'Login'

function checkLoginPageTitle(){
    cy.title().should('eq', loginPageTitle)
}

function performValidLogin(username, password, confirmationContent){
    cy.get('h2').should('contain', formLabel)
    cy.get(usernameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(submitBtn).click()
    cy.get('h2').should('contain', confirmationContent)
}

module.exports = {
    checkLoginPageTitle,
    performValidLogin
}