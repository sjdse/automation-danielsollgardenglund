/// <reference types="cypress" />

const createBtn = 'h2 > .btn'
const backToDashBtn = ':nth-child(3) > .btn'
const backToReservationsBtn = '[href="/reservations"]'

const startSelector = ':nth-child(1) > input'
const endSelector = ':nth-child(2) > input'
const clientSelector = ':nth-child(3) > select'
const roomSelector = ':nth-child(4) > select'
const billSelector = ':nth-child(5) > select'
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
    cy.wait(1000) //exiting too fast seems to bring you to a 404 page in headless. wait to fix
    cy.get(backToReservationsBtn).click()
}

function checkEditPage(confirmationContent){
    
    cy.get(ellipMenu1).click()
    cy.get(ellipEdit).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.wait(1000) //editing reservations takes too long. 404 if you don't wait
    cy.get(backToReservationsBtn).click()
}

function createReservation(start, end, client, room, bill, confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(startSelector).type(start)
    cy.get(endSelector).type(end)
    cy.get(clientSelector).select(client)
    cy.get(roomSelector).select(room)
    cy.get(billSelector).select(bill)
    cy.get(saveBtn).click()
}

function deleteReservation(){
    cy.get(ellipMenu2).click()
    cy.get(ellipDelete).click()
}

module.exports = {
    backToDashboard,
    checkCreatePage,
    checkEditPage,
    createReservation,
    deleteReservation
}