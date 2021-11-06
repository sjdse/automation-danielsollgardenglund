/// <reference types="cypress" />

import * as login from '../pages/indexPage'
import * as dashboard from '../pages/dashboardPage'
import * as targets from '../targets/targets'
import * as room from '../pages/roomsPage'
import * as client from '../pages/clientsPage'
import * as bill from '../pages/billsPage'
import * as reservation from '../pages/reservationsPage'


describe('Regression testing suite', function(){

    beforeEach(() => {
        cy.visit(targets.base_url)
        login.checkLoginPageTitle()
        login.performValidLogin(targets.username, targets.password, 'Tester Hotel Overview')
    })

    afterEach(() => {
        dashboard.performLogout()
        login.checkLoginPageTitle()
    })

    
    it('Navigate all the pages', function(){

        dashboard.viewRooms('Rooms')
        room.checkCreatePage('New Room')
        room.checkEditPage('Room: ')
        room.backToDashboard('Tester Hotel Overview')

        dashboard.viewClients('Clients')
        client.checkCreatePage('New Client')
        client.checkEditPage('Client: ')
        client.backToDashboard('Tester Hotel Overview')

        dashboard.viewBills('Bills')
        bill.checkCreatePage('New Bill')
        bill.checkEditPage('Bill: ')
        bill.backToDashboard('Tester Hotel Overview')

        dashboard.viewReservations('Reservations')
        reservation.checkCreatePage('New Reservation')
        reservation.checkEditPage('Reservation: ')
        reservation.backToDashboard('Tester Hotel Overview')
    })

    it('Create and delete room', function(){

        let category = 0
        let floorNmbr = '5'
        let roomNmbr = '501'
        let available = true
        let price = '1000'
        let features = [1, 2]
        
        dashboard.viewRooms('Rooms')
        room.createRoom(category, floorNmbr, roomNmbr, available, price, features, 'New Room')
        room.deleteRoom()
        room.backToDashboard('Tester Hotel Overview')
    })
    
    it('Create and delete client', function(){

        let name = 'testname'
        let email = 'test@mail.com'
        let phone = '070-1234567'

        dashboard.viewClients('Clients')
        client.createClient(name, email, phone, 'New Client')
        client.deleteClient()
        client.backToDashboard('Tester Hotel Overview')
    })

    it('Create and delete bill', function(){

        let value = '1500'
        let paid = true

        dashboard.viewBills('Bills')
        bill.createBill(value, paid, 'New Bill')
        bill.deleteBill()
        bill.backToDashboard('Tester Hotel Overview')

    })

    it.only('Create and delete reservation', function(){

        let start = '2020-06-23'
        let end = '2020-07-01'
        let client = 1
        let room = 1
        let bill = 1


        dashboard.viewReservations('Reservations')
        reservation.createReservation(start, end, client, room, bill, 'New Reservation')
        reservation.deleteReservation()
        reservation.backToDashboard('Tester Hotel Overview')
    })




})