/// <reference types="cypress" />

const createBtn = 'h2 > .btn'
const backToDashBtn = ':nth-child(3) > .btn'
const backToRoomsBtn = '[href="/rooms"]'

const categorySelector = ':nth-child(1) > select'
const floorSelector = ':nth-child(2) > input'
const roomSelector = ':nth-child(3) > input'
const checkboxSelector = '.checkbox'
const priceSelector = ':nth-child(5) > input'
const featureSelector = ':nth-child(6) > select'
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
    cy.get(backToRoomsBtn).click()
}

function checkEditPage(confirmationContent){
    cy.get(ellipMenu1).click()
    cy.get(ellipEdit).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(backToRoomsBtn).click()
}

function createRoom(category, floorNmbr, roomNmbr, available, price, features, confirmationContent){
    cy.get(createBtn).click()
    cy.get('h2 > div').should('contain', confirmationContent)
    cy.get(categorySelector).select(category)
    cy.get(floorSelector).type(floorNmbr)
    cy.get(roomSelector).type(roomNmbr)

    if (available){
    cy.get(checkboxSelector).click()
    }
    
    cy.get(priceSelector).type(price)
    cy.get(featureSelector).select(features)
    cy.get(saveBtn).click()
}


function deleteRoom(){
    cy.get(ellipMenu3).click()
    cy.get(ellipDelete).click()
}

module.exports = {
    backToDashboard,
    createRoom,
    checkCreatePage,
    checkEditPage,
    deleteRoom
}