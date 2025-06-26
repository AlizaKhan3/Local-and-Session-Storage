import SignupForm from "../LocalStorage/SignupForm";

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

//implememt React Hook,   
//With React hum ager is approach se kar rahe toh theek hei but with API use react Hook/Formik
//In react Native, hum async promise wala kaam krenge local storage mein bhi but with react no need of promise