const express = require('express')
const router = express.Router()
const {
    registerUser, 
       loginUser,
       getUsers,
       singleUser,
       deleteUser,
       updateUser
    } = require("../controllers/userController")

router.post('/register' , registerUser)
router.post('/login', loginUser)
router.get('/get',getUsers)
router.get('/get/:id',singleUser)
router.delete('/:id',deleteUser)
router.put('/get/:id',updateUser)



module.exports = router