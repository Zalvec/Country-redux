import React from 'react'
import { useField } from '../hooks'
import { useDispatch } from 'react-redux'
import { getCountries } from '../data/countries'
import {TextField, Button} from '@material-ui/core'

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
            <form onSubmit={submitHandler} className='form'>
                {!error && (<TextField {...field} id="standard-basic" label="Search your country" style={{width: '240px', margin: "1em .5em 1em 0"}}/>)}
                {error && (<TextField {...field} error id="standard-basic" label="Search your country" style={{width: '240px', margin: "1em .5em 1em 0"}}/>)}
                <Button type="submit" color="primary" variant="contained" className="submitButton" >
                    Find country
                </Button>
            </form>
        </>
    )
}