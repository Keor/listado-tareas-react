import { useState } from 'react'

export const UseForm = (initialForm = {}) => {
    const [formState, setFormState] = useState (initialForm)
    const onInputchange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState, [name]: value
        })
    }
    return {...formState,
        formState,
        onInputchange}
}

export default UseForm