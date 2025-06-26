//handling React Hook Form data in Local Storage.
import ReactHookFormApp from "./ReactHookForm";
const HandleData = () => {

    const handleData = (data) => {
        console.log("ye raha data", data);
        const stringifyData = JSON.stringify(data);
        localStorage.setItem("user-data", stringifyData);
        console.log(stringifyData)
    }
  return (
    <div>
        <ReactHookFormApp sendFormData={handleData}/>
    </div>
  )
}

export default HandleData;
