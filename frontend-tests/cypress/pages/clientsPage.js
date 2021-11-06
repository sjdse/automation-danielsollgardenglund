/// <reference types="cypress" />

const createBtn = 'h2 > .btn'
const backToDashBtn = ':nth-child(3) > .btn'
const backToClientsBtn = '[href="/clients"]'

const nameSelector = ':nth-child(1) > input'
const emailSelector = ':nth-child(2) > input'
const phoneSelector = ':nth-child(3) > input'
const saveBtn = '.blue'

const ellipMenu1 = ':nth-child(1) > .action > img'
const ellipMenu3 = ':nth-child(3) > .action > img'
const ellipEdit = '.menu > :nth-child(1)'
const ellipDelete = '.menu > :nth-child(2)'


function backToDashboard(confirmationContent){
    cy.get(backToDashBtn).click()
    cy.get('h2').should('contain', confirmationContent)
}

function checkCreatePage(confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(backToClientsBtn).click()
}

function checkEditPage(confirmationContent){
    cy.get(ellipMenu1).click()
    cy.get(ellipEdit).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(backToClientsBtn).click()
}

function createClient(name, email, phone,confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(nameSelector).type(name)
    cy.get(emailSelector).type(email)
    cy.get(phoneSelector).type(phone)
    cy.get(saveBtn).click()
}

function deleteClient(){
    cy.get(ellipMenu3).click()
    cy.get(ellipDelete).click()
}

module.exports = {
    backToDashboard,
    checkCreatePage,
    checkEditPage,
    createClient,
    deleteClient
}