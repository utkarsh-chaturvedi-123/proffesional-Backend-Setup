import mongoose from "mongoose"
import { DATABASE_NAME } from "../constants.js"


const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`)
        console.log(`Mongodb connected  !! DB HOST: ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log(`Mongodb connection error ${error}`)
        process.exit(1);
    }
}

export default connectDB