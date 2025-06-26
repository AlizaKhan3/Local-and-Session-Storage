import InputComponent from "../InputComponent"
import { useForm } from "react-hook-form"

const ReactHookForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("email"));
    return (
        <div className="flex flex-col gap-3">
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent placeholder="Enter Your Name" {...register("name", { required: "true" })} />
                {errors.name && <span>Name field is required</span>}
                <InputComponent placeholder="Enter Email" {...register("email", { required: "true" })} />
                {errors.email && <span>Email field is required</span>}
                <InputComponent placeholder="Enter Password" {...register("password", { required: "true" })} />
                {errors.password && <span>Password field is required</span>}
                <hr />
                <input
                    {...register("test", {
                        maxLength: {
                            value: 2,
                            message: <p>max length must be 2</p> // JS only: <p>error message</p> TS only support string
                        }
                    })}
                />
                <hr />
                <select {...register("gender", { required: "true" })} className="block">
                    <option value="">Select Gender</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input type="submit" />
                {/* || errors.email || errors.name */}

            </form>

        </div>
    )
}

export default ReactHookForm
