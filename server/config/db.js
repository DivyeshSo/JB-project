import mongoose from "mongoose";

// Function to connect to the MongoDB Database
const connectDB = async () => {

    mongoose.connection.on('connected',()=>console.log('Database Connected'))

    await mongoose.connect(`${process.env.MONGODB_URL}/jobportal`)

}

export default connectDB