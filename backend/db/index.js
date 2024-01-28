import mongoose from "mongoose"

const connectDb = async ()=>{
    try{
        const db = await mongoose.connect("mongodb+srv://techburnt06:sourav123@cluster0.vswscpy.mongodb.net/shopsy?retryWrites=true&w=majority")
        console.log(`Connnected to DB: ${db.connection.name} on port: ${db.connection.port}`)
    }catch(err){
        console.error(err)
    }
}

export default connectDb