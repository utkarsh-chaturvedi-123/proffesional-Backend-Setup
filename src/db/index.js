import mongoose from "mongoose"
import { DATABASE_NAME } from "../constants.js"


const connectDB = async ()=>{
    try {
        const connectionInstance =  await mongoose.connect(`${process.env.MONGODB_URI}/${DATABASE_NAME}`);
        console.log(`Mongodb connected  !! DB HOST: ${connectionInstance.connection.host}`)
        /*connectionInstance.connection.host -> this will show the host server because server are different (production,development,testing etc)*/
    } catch (error) {
        console.log(`Mongodb connection Failed ! ${error}`)
        process.exit(1);
    }
}

export default connectDB