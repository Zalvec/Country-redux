import { useState } from 'react'

export const useField = (str = "", errorSupport = false) => {
    const [value, setValue] = useState(str)
    const [error, setError] = useState(false)
    const onChange = e => {
        setError(false)
        setValue(e.target.value)
    }

    if (errorSupport) {
        return { value, setValue, error, setError, onChange}
    } else {
        return { value, onChange}
    }
}