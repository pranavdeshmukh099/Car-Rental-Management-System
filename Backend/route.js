const express = require('express')

const Controller = require('./controller')

const route = express.Router()



route.post('/register', Controller.addcust)
route.post('/postcontact', Controller.addusercontact)
route.post('/postbooking', Controller.addBooking)
route.post('/postcar', Controller.addcar)


route.get('/findalluser' ,Controller.getdata)
route.get('/findallcar' ,Controller.getcardata)
route.get('/findallcontact',Controller.getContactData)
route.get('/findallbooking',Controller.getBookingData)


route.get('/finduser/:email',Controller.findElementbyid)
route.get('/findcar/:name',Controller.findCarbyid)
route.get('/findbooking/:usermail',Controller.findBookingbyid)


route.put('/update/:email',Controller.updateuser)
route.put('/updateCar/:name',Controller.updatecar)
route.put('/updatebooking/:usermail',Controller.updateBooking)


route.delete('/delete/:email',Controller.deleteuser)
route.delete('/deleteCar/:name',Controller.deleteCar)
route.delete('/deleteCont/:email',Controller.deleteCont)
route.delete('/deletebooking/:useremail',Controller.deleteBooking)

module.exports = route