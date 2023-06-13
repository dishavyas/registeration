const express = require('express')
const asyncHandler = require('express-async-handler')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const { errorHandler } = require('./middleware/errorHandler')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5001
app.use(cors());

//body parser
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//connect database
connectDB()


//Routes
app.use('/api/user' , require("./routes/userRoutes"))

app.listen(PORT , () => console.log(`Server is running at PORT : ${PORT}`))

// Error Middleware
app.use(errorHandler)