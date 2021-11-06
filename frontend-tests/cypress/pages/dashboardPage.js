/// <reference types="cypress" />

const logoutBtn = '.user > .btn'
const roomBtn = ':nth-child(1) > .btn'
const clientBtn = '.blocks > :nth-child(2) > .btn'
const billBtn = ':nth-child(3) > .btn'
const reservationBtn = ':nth-child(4) > .btn'

function performLogout(){
    cy.get(logoutBtn).click()
}

function viewRooms(confirmationContent){
    cy.get(roomBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
}

function viewClients(confirmationContent){
    cy.get(clientBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
}

function viewBills(confirmationContent){
    cy.get(billBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
}

function viewReservations(confirmationContent){
    cy.get(reservationBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
}



module.exports = {
    performLogout,
    viewRooms,
    viewReservations,
    viewClients,
    viewBills
}