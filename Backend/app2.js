const express = require('express')
const app = express()
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/rentalmgmt')
    .then(console.log("Connected to database"))
    .catch((err) => {
        console.log(err)
    })
app.use(express.json())


const carmodal = () => {
    const carSchema = mongoose.Schema({
        fname: String,
        lname: String,
        dob: Date,
        email: String,
        contactno: Number,
        gender: String,
        address: String

    })
    mongoose.pluralize(null);
    module.exports = mongoose.model('registeredcustomers', carSchema)

}


const carController = () => {
    
    const addcust = async(req,res)=>{
        const {fname, lname, dob, email, contactno, gender, address} = req.body;
       
        try{
            const custdata = new custmodal({
                fname, lname, dob, email, contactno, gender, address
            })
            const data = await custdata.save();
            
            res.status(200).send({data})
        }
        catch(err){
            console.log(err)
            res.status(400).send({err})
        }
    }
}

const route = () => {
    const route = express.Router()
    route.post('/', carController.addcust)
}



app.use('/abc', route)
app.get(('/'), (req, res) => {
    res.send("running at localhost:8000")
})
app.listen(8000, () => console.log("running at localhost:8000"))