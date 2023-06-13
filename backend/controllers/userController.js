const jwt = require('jsonwebtoken')
const asyncHandler = require("express-async-handler")
const bcrypt = require('bcryptjs')
const User = require("../model/userModel")

 //get all user register
 const getUsers =  asyncHandler(async(req,res)=>{
    const userRegister = await User.find()
    res.send(userRegister)
 })

const registerUser = asyncHandler( async(req,res) => {
    
    const {name , email , password} = req.body

    if(!name || !email ||!password){
        res.status(400)
        throw new Error("Please Fill All Details")
    }

    // Validations

    // Find if user already exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User Already Exists')
    }

    // Hash Password

    const salt =  await  bcrypt.genSalt(10)
    const hashedPassword = await  bcrypt.hash(password , salt)

    // create user
    const user = await User.create({
        name,
        email,
        password : hashedPassword
    })

    if(user){
        res.status(201).json({
            _id:user._id,
            name : user.name,
            email:user.email,
            token : generateToken(user._id)
        })   
    }else{
        res.status(400)
        throw new Error("Invalid User Data")
    }

   
})
const loginUser = asyncHandler(async(req,res) => {
   const {email, password }= req.body

   //checl username & password
   const user = await User.findOne({email})
   if (user && await (bcrypt.compare(password, user.password))) {
    res.status(200).json({
        _id: user._id,
        name : user.name,
        email : user.email,
        token: generateToken(user._id)
    })
    
   }
   else{
    res.status(401)
        throw new Error ("Invaild Credentials")
    
   }
 })
//get individual user
 const singleUser =  asyncHandler(async(req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        res.status(200).json(user);
    }catch( error ){
        res.status(404).json({ message: error.message })
    }
 })

 //delete user
 const deleteUser =  asyncHandler(async(req,res)=>{
    const data = await User.findByIdAndDelete(req.params.id)
    
    if(!data){
        throw new Error("Not Found")
        res.status(404)
    }

    res.json({msg : "Deleted"})
 })

 //update user
 const updateUser =  asyncHandler(async(req,res)=>{
    const updated = await User.findByIdAndUpdate(req.params.id , req.body , {new : true})
    
    if(!updated){
        throw new Error("Cant Update")
    }

    res.json(updated)
 })


//token generateion 
const generateToken = (id)=>{
    return jwt.sign({id}, process.env.JWT_SECRET, {
     expiresIn : "30d"
    })
}




module.exports = {
                  registerUser, 
                  loginUser,
                  getUsers,
                  singleUser,
                  deleteUser,
                  updateUser
                }