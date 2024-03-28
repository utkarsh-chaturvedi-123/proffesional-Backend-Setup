// require('dotenv').config({path: './env'})

/*Above syntax will also work but we are using proffesional approach by using import for following the proffessional syntax*/
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: './env',
}),

connectDB();
