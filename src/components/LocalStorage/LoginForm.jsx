const LoginForm = () => {
  return (
    <div className="grid place-items-center h-full">
            <h1>Signup Form </h1>
            <form onSubmit={submitHandle} action="" className="max-w-lg flex justify-center items-center flex-col gap-3">
                <InputComponent onChange={(e)=> handleInput('email', e.target.value)} placeholder="Enter Email Address" type="email" required />
                <InputComponent onChange={(e)=> handleInput('password', e.target.value)} placeholder="Enter Password Address" type="password" required />
                <button type="submit" className="bg-violet-500 px-4 py-2 rounded-xl"> Login</button>
            </form>
        </div>
  )
}
export default LoginForm;