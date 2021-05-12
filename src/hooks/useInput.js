import { useState } from "react"

const useInput = (initialState = {}) => {
    const [inputValue, setInputValue] = useState(initialState)

    const handleInputChange = ({target}) => {
        setInputValue({
            ...inputValue,
            [target.name]: target.value
        })
    }

    return [inputValue, handleInputChange]
}

export default useInput