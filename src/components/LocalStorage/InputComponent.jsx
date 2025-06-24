//...props inclued everything we can get inside input tag.

const InputComponent = ({type, placeholder, ...props}) => {
  return (
    <div>
      <input type={type} placeholder={placeholder} {...props} /> 
    </div>
  )
}

export default InputComponent
