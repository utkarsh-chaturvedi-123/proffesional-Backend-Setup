// require('dotenv').config({path: './env'})

/*Above syntax will also work but we are using proffesional approach by using import for following the proffessional syntax*/
import dotenv from "dotenv"
import connectDB from "./db/index.js";


dotenv.config({
    path: './env',
})

connectDB()/*After connecting the database this will return the promise*/
/*Now this code ; where data shown in the port*/
.then(() =>{
    app.listen(process.env.PORT || 8000 ,() =>{
        console.log(` Server is Running at Port : ${process.env.PORT}`)
    })
})
.catch((error)=>{
    console.log(`server connection Failed !! ${error}`)
})
