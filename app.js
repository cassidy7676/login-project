const express = require('express')
const dotEnv = require ('dotenv')
const userRoute = require('./Route/UserRoute')
const ejs = require('ejs');
const expressLayouts = require('express-ejs-layouts');



// configure dotenv
dotEnv.config();

const dbConnect=require('./dbConnect')
const user = require('./users')

//port
const PORT = process.env.PORT





//server
const app = express();


// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.use(expressLayouts)

app.use(express.static('public'))


// Middleware 
app.use(express.urlencoded({ extended: false }));


app.use('/',userRoute)








app.listen(PORT, ()=>{
    console.log(`server started on http://localhost:${PORT}`)
    dbConnect.authenticate()

})
