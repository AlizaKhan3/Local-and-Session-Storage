import { useState } from "react"
import InputComponent from "./InputComponent"
import RadioComponent from "./RadioComponent"

const SignupForm = ({submitSignupForm}) => {
     const [formData, setFormData] = useState({}) //Empty Object inside useState coz localStorage stores data in key:value format

    const submitHandle = (e) => {
        e.preventDefault();
        console.log("Form submitted")
        
        submitSignupForm(formData)   //sending data to another component on submitting
        e.target.reset() //empty all fields
    }

    const handleInput = (key, value) => {  //having key and value
        const updatedFormData = {
            ...formData,
            [key] : value //making key dynamic (name, email, password, gender)
        }
        setFormData(updatedFormData) //Object form mein data set krna hei
   
        //way-02
        // setFormData(()=> {
        //     return(
        //         {
        //             ...formData,
        //             [key] : value 
        //         }
        //     )
        // })
   
        //way-03
        //  setFormData((prev)=> {
        //     return(
        //         {
        //             ...prev,
        //             [key] : value 
        //         }
        //     )
        // })
    }

    console.log(formData);

    return (
        <div className="grid place-items-center h-full">
            <h1>Signup Form </h1>
            <form onSubmit={submitHandle} action="" className="max-w-lg flex justify-center items-center flex-col gap-3">
                <InputComponent onChange={(e)=> handleInput('name', e.target.value)} placeholder="Enter your name" type="text" required />
                <InputComponent onChange={(e)=> handleInput('email', e.target.value)} placeholder="Enter Email Address" type="email" required />
                <InputComponent onChange={(e)=> handleInput('password', e.target.value)} placeholder="Enter Password Address" type="password" required />

                <RadioComponent label="Select Gender" name="gender" radioOptions={['male', 'female']} onChange={(e) => handleInput("gender", e.target.value)} />

                <button type="submit" className="bg-violet-500 px-4 py-2 rounded-xl"> Submit</button>
            </form>
        </div>
    )
}

export default SignupForm
