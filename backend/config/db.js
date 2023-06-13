const { mongoose } = require("mongoose")
const colors = require('colors');

const connectDB = async() => {
 
    const conn =  await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database Conected : ${conn.connection.port}`.bgMagenta.underline)
    
}

module.exports = connectDB