import React, {  useState } from "react"
import { toast } from 'react-toastify';
import "./register.css"
import Axios from "axios"

const initialState = {
    name: "",
    email: "",
    password: "",
}

const Register = () => {
    const [state, setState] = useState(initialState)
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    

    const register = (e) => {
        e.preventDefault()
        if (!name || !email || !password ) {
            toast.error("Please fill all details")
        } else {
            Axios.post("http://localhost:8081/api/user/register", {

                name,
                email,
                password,
            }).then((res) => {
                setState({ name: "", email: "", password: ""})
                console.log(res.data);


            }).catch((err) => toast.error(err.res));
            toast.success("Registered Successfully!!")

        }
        setState("")
    }

 
   
    return (

        <div className="registerpage">
            <div className="register">
                <h1>Register</h1>
                <input type="text" name="name" placeholder="Your Name" onChange={(e) => { setName(e.target.value) }} />
                <input type="text" name="email" placeholder="Your Email" onChange={(e) => { setEmail(e.target.value) }} />
                <input type="password" name="password" placeholder="Your Password" onChange={(e) => { setPassword(e.target.value) }} />
                <div className="button" onClick={register} >Register</div>
              
            </div>

        </div>

    )
}

export default Register


