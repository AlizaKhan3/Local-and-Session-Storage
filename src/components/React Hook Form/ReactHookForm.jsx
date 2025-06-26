import InputComponent from "../InputComponent"
import { useForm } from "react-hook-form"

const ReactHookForm = () => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div>
            <h1>React hook form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <InputComponent placeholder="Enter Your Name" {...register("name")}/>
                <InputComponent placeholder="Enter Email" {...register("")} />
                <InputComponent placeholder="Enter Password" />
            </form>

        </div>
    )
}

export default ReactHookForm
