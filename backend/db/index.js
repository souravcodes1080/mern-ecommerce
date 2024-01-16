import mongoose from "mongoose"

const connectDb = async ()=>{
    try{
        const db = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connnected to DB: ${db.connection.name} on port: ${db.connection.port}`)
    }catch(err){
        console.error(err)
    }
}

export default connectDb