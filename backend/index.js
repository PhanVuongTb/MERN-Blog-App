const express = require('express')
const mongoose = require("mongoose")
const dotenv = require('dotenv').config()
const cors = require('cors')

const authController = require('./controllers/auth')

const app = express();

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
 
// routes
app.use('/auth', authController)

//connect db
mongoose
    .set('strictQuery', false)
    .connect("mongodb+srv://Phan_Vuong:Anhnhoem2@cluster0.8znm798.mongodb.net/?retryWrites=true&w=majority")
    .then(() => console.log("Kết nối db thành công"))
    .catch((error) => console.log(error));

// connect server
app.listen(process.env.PORT, () => console.log('Server listening on port ' + process.env.PORT));