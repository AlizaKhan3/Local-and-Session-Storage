import InputComponent from "../InputComponent"
import { useForm } from "react-hook-form"

// const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/

const ReactHookFormApp = ({sendFormData}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
      const formData =  data;
      console.log(data)
      sendFormData(data)
    }
    // console.log(watch("email"));
    
    return (
        <div className="flex flex-col gap-3">
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent type="text" placeholder="Enter Your Name" {...register("name", { required: "Please enter your name" })} />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                <InputComponent type="email" placeholder="Enter Email"
                    {...register("email", {
                        required: "Please enter email",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid Email Address"
                        }
                    })} />

                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

                <InputComponent type="password" placeholder="Password"
                    {...register("password", {
                        required: "Password is required",
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/,
                            message: "Password must be 8-16 chars, include upper, lower, number, special char"
                        }
                    })} />
                {/* {errors.password && <span>Password field is required</span>} */}
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}

                <hr />
                <input
                    {...register("test", {
                        maxLength: {
                            value: 2,
                            message: "max length must be 2" // JS only: <p>error message</p> TS only support string
                        }
                    })}
                />
                {errors.test && <span>max length exceeding 2</span>}
                <hr />

                <select {...register("gender", { required: "true" })} className="block">
                    <option value="">Select Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <button type="submit">Submit</button>
            </form>

        </div>
    )
}

export default ReactHookFormApp
