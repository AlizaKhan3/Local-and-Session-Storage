import SignupForm from "../SignupForm";

const SESSION_STORAGE_KEY = "user-data-key"

const AppSessionStorage = () => {

  const handleUserSignupData = (formData) => {
    const stringifyData = JSON.stringify(formData);
    const setData = sessionStorage.setItem(SESSION_STORAGE_KEY, stringifyData)
    console.log(setData)
  }

  return (
    <div>
      <h1>Session Storage</h1>
      <SignupForm submitSignupForm={handleUserSignupData}/>
    </div>
  )
}

export default AppSessionStorage;
