import mongoose from "mongoose"

export const connectDB = async ()=>{

    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log('Connected Successfulyy');
        
    }catch(error){
        console.log('NOT Connected Successfulyy');
        process.exit(1)

    }


}