const modal = require('./modal')
const mongoose = require('mongoose')
mongoose.pluralize(null);
const custmodal = mongoose.model('registeredcustomers', modal.userSchema)
const carmodal = mongoose.model('car', modal.carSchema)
const contactmodal = mongoose.model('contact',modal.contactSchema)
const bookingmodal = mongoose.model('bookings',modal.bookingSchema)

// ------------------------------------ Customers ---------------------------------------------------
const addcust = async (req, res) => {
    const { fname, lname,password, dob, email, contactno, gender, address } = req.body;

    try {
        const custdata = new custmodal({
            fname, lname,password, dob, email, contactno, gender, address
        })
        const data = await custdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}


const getdata = async (req, res) => {
    const userdata = await custmodal.find();

    try {
        res.status(200).send({ data:userdata,msg:"success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}




const updateuser = async (req, res) => {
    try {
        const { email } = req.params
        const { fname, lname, dob, contactno, gender, address } = req.body
        const data = await custmodal.updateOne(
            { email },
            {
                $set: { fname, lname, dob, contactno, gender, address }
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "data updated" })
        }
        else {
            res.status(200).send({ msg: "data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "user not found" })
    }
}

const deleteuser = async (req, res) => {

    try {
        const { email } = req.params
        const data = await custmodal.deleteOne({email})

        if(data.deletedCount > 0)
        {
            res.status(200).send({msg:"Data deleted"})
        }
        else{
            res.status(200).send({msg:"Data not deleted"})

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

const findElementbyid = async(req,res)=>{
    try {
        const {email} = req.params
        const userdata = await custmodal.findOne({email})
        res.status(200).send(userdata)
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}


// ------------------------------ Cars ---------------------------------
const addcar = async (req, res) => {

    const { name, model, cartype , rent, fuel, price, noSeats  } = req.body;

    try {
        const cardata = new carmodal({
            name, model, cartype, rent, fuel, price, noSeats 
        })
        const data = await cardata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}
const updatecar = async (req, res) => {
    try {
        const { name } = req.params
        const { model,    cartype,        rent,    fuel, price,noSeats } = req.body
        const cdata = await carmodal.updateOne(
            { name },
            {
                $set: { model,    cartype,        rent,    fuel, price,noSeats }
            }
        )
        if (cdata.modifiedCount > 0) {
            res.status(200).send({ msg: "car data updated" })
        }
        else {
            res.status(200).send({ msg: "car data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "car not found" })
    }
}

const getcardata = async (req, res) => {
    const cardata = await carmodal.find();

    try {
        res.status(200).send({ data:cardata,msg:"success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}
const findCarbyid = async(req,res)=>{
    try {
        const {name} = req.params
        const data = await carmodal.findOne({name})
        res.status(200).send({msg:"success",data})
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
const deleteCar = async (req, res) => {

    try {
        const { name } = req.params
        const data = await carmodal.deleteOne({name})

        if(data.deletedCount > 0)
        {
            res.status(200).send({msg:"Data deleted"})
        }
        else{
            res.status(200).send({msg:"Data not deleted"})

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

// --------------- User Contact ------------------

const addusercontact=async(req,res)=>{
    
    const{name,id,title,description}=req.body
    try{
        const abdata=new contactmodal({
           name,id,title,description
        })
        const data=await abdata.save()
        
        res.status(200).send({data})
    }
    catch(err)
    {
        console.log(err)
        res.status(400).send({err})
    }
}
const deleteCont = async (req, res) => {

    try {
        const { email } = req.params
        const data = await contactmodal.deleteOne({id})

        if(data.deletedCount > 0)
        {
            res.status(200).send({msg:"Data deleted"})
        }
        else{
            res.status(200).send({msg:"Data not deleted"})

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}
const getContactData = async (req, res) => {
    const contdata = await contactmodal.find();

    try {
        res.status(200).send({ data:contdata,msg:"success" });
        // console.log(contdata);
    } catch (error) {
        console.log(error);
        res.status(400).send({ data:"cant fetch", error });
    }
}





// ------------------- Booking ----------------------------
const addBooking = async (req, res) => {
    const { username,usermail, carname, payment,  source, destination } = req.body;

    try {
        const bookdata = new bookingmodal({
            username,usermail, carname, payment, source, destination
        })
        const data = await bookdata.save();

        res.status(200).send({ data })
    }
    catch (err) {
        console.log(err)
        res.status(400).send({ err })
    }
}


const getBookingData = async (req, res) => {
    const userdata = await bookingmodal.find();

    try {
        res.status(200).send({ data:userdata,msg:"success" })
    } catch (error) {
        console.log(error);
        res.status(400).send({ error });
    }
}




const updateBooking = async (req, res) => {
    try {
        const { usermail } = req.params
        const { username, carname, payment, km, source, destination } = req.body
        const data = await bookingmodal.updateOne(
            { usermail },
            {
                $set: {username,carname, payment, source, destination }
            }
        )
        if (data.modifiedCount > 0) {
            res.status(200).send({ msg: "data updated" })
        }
        else {
            res.status(200).send({ msg: "data not updated" })

        }
    }
    catch (err) {
        console.log(err);
        res.status(400).send({ msg: "user not found" })
    }
}

const deleteBooking = async (req, res) => {

    try {
        const { email } = req.params
        const data = await bookingmodal.deleteOne({email})

        if(data.deletedCount > 0)
        {
            res.status(200).send({msg:"Data deleted"})
        }
        else{
            res.status(200).send({msg:"Data not deleted"})

        }

    } catch (error) {
        console.log(error);
        res.status(400).send({ msg: "data cant delete" })
    }
}

const findBookingbyid = async(req,res)=>{
    try {
        const {usermail} = req.params
        const userdata = await bookingmodal.findOne({usermail})
        res.status(200).send({ data:userdata,msg:"success" })
    } catch (error) {
        console.log(error);
        res.status(400).send("Not found")
    }

}
module.exports = { 
    addcust, getdata, updateuser,deleteuser,findElementbyid,
    addcar,getcardata ,findCarbyid,updatecar,deleteCar,
    addusercontact,deleteCont,getContactData,
    addBooking,getBookingData,updateBooking,deleteBooking,findBookingbyid
}