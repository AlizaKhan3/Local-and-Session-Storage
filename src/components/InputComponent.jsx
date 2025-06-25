//...props inclued everything we can get inside input tag.

const InputComponent = ({placeholder, ...props}) => {
  return (
    <div>
      <input className="py-2 px-2 rounded-md border-b-fuchsia-800 border-2 focus:outline-none" placeholder={placeholder} {...props} /> 
    </div>
  )
}

export default InputComponent
