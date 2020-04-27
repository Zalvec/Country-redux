import React from 'react'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { getCountries } from '../data/countries'

export default () => {
    const {error, setError, setValue, ...field} = useField("", true)
    const dispatch = useDispatch()
    const submitHandler = e => {
        e.preventDefault()
        if (field.value !== "") {
            setValue("")
            dispatch(getCountries(field.value))
        } else {
            setError(true)
        }
    }
    
    return (
        <>
            <h2>Search your favorite countries</h2>
            <form onSubmit={submitHandler}>
                <input type="text" {...field} className={error ? "error" : ""}/>
                <input type="submit" value="Activate CountrySeacher 3000"/>
            </form>
        </>
    )
}