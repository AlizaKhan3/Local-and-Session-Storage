import SignupForm from "./SignupForm"

const LOCAL_STORAGE_USERDATA_KEY = "user-data"

const AppLocalStorage = () => {
    const handleSignupData = (formData) => {
        console.log(formData);
        const stringifyData = JSON.stringify(formData);
        console.log(stringifyData);

        // localStorage.setItem("user-data", stringifyData)
        localStorage.setItem(LOCAL_STORAGE_USERDATA_KEY, formData);
    }

    const getUser = () => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_USERDATA_KEY)
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);
    }

    return (
        <div className="grid place-items-center h-full">
            <SignupForm submitSignupForm={handleSignupData} />
            <h2>//Login details check//</h2>
            <button onClick={getUser}>GET USER DETAILS</button>
        </div>
    )
}

export default AppLocalStorage
