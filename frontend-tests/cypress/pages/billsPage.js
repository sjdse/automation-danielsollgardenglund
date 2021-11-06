/// <reference types="cypress" />

const createBtn = 'h2 > .btn'
const backToDashBtn = 'h1 > .router-link-active'
const backToBillsBtn = '[href="/bills"]'

const valueSelector = 'input'
const checkboxSelector = '.checkbox' 
const saveBtn = '.blue'

const ellipMenu1 = ':nth-child(1) > .action > img'
const ellipMenu2 = ':nth-child(2) > .action > img'
const ellipEdit = '.menu > :nth-child(1)'
const ellipDelete = '.menu > :nth-child(2)'

function backToDashboard(confirmationContent){
    cy.get(backToDashBtn).click()
    cy.get('h2').should('contain', confirmationContent)
}

function checkCreatePage(confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(backToBillsBtn).click()
}

function checkEditPage(confirmationContent){
    cy.get(ellipMenu1).click()
    cy.get(ellipEdit).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(backToBillsBtn).click()
}

function createBill(value, paid, confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(valueSelector).type(value)

    if (paid){
    cy.get(checkboxSelector).click()
    }

    cy.get(saveBtn).click()
}

function deleteBill(){
    cy.get(ellipMenu2).click()
    cy.get(ellipDelete).click()
}

module.exports = {
    backToDashboard,
    checkCreatePage,
    checkEditPage,
    createBill,
    deleteBill
}