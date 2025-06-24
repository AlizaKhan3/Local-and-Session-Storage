const RadioComponent = ({ label, radioOptions, name, onChange }) => {
    return (
        <div>
            {label}
            {
                radioOptions.map((option, index) => {
                    return (
                        <label key={index}>
                            <input type="radio" name={name} onChange={onChange} value={option} key={index} />
                            {option}
                        </label>
                    )
                })
            }
        </div>
    )
}
export default RadioComponent