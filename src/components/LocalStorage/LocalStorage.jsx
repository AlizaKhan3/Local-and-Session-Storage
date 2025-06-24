import SignupForm from "./SignupForm"

const AppLocalStorage = () => {
    const handleSignupData = (formData) => {
        console.log(formData);
    }
    
    return (
        <div className="grid place-items-center h-full">
           <SignupForm submitSignupForm={handleSignupData} />
        </div>
    )
}

export default AppLocalStorage
