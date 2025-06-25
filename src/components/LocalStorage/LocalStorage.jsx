import SignupForm from "./SignupForm"

const LOCAL_STORAGE_USERDATA_KEY = "user-data"

const AppLocalStorage = () => {
    const handleSignupData = (formData) => {
        console.log(formData);
        const stringifyData = JSON.stringify(formData);
        console.log(stringifyData);

        // localStorage.setItem("user-data", stringifyData)
        localStorage.setItem(LOCAL_STORAGE_USERDATA_KEY, stringifyData);
    }

    const getUser = () => {
        const storedData = localStorage.getItem(LOCAL_STORAGE_USERDATA_KEY)
        const parsedData = JSON.parse(storedData);
        console.log(parsedData);
    }

    const removeSTorageItem = () => {
        localStorage.removeItem(LOCAL_STORAGE_USERDATA_KEY);
    }

    const clearStorage = () => {
        localStorage.clear(LOCAL_STORAGE_USERDATA_KEY);
    }

    return (
        <div className="grid place-items-center h-full">
            <SignupForm submitSignupForm={handleSignupData} />
            <h2>//Login details check//</h2>
            <hr />
            <button onClick={getUser} className="bg-amber-400 p-3 rounded-2xl m-2">GET USER DETAILS</button>
            <hr />
            <button onClick={removeSTorageItem} className="bg-amber-400 p-3 rounded-2xl m-2">REMOVE USER DETAILS</button>
            <hr />
            <button onClick={clearStorage} className="bg-amber-400 p-3 rounded-2xl m-2">CLEAR ALL STORAGE</button>
        </div>
    )
}

export default AppLocalStorage
