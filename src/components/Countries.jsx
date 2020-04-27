import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { ThumbUp, ThumbDown } from '@material-ui/icons/';
import { IconButton } from '@material-ui/core'
import { likeCountry, unlikeCountry } from '../data/favoriteCountries'

export default () => {
    const { loading, error, data} = useSelector(state => state.countries)
    const dispatch = useDispatch()

    const likeHandler = country => e => {
        dispatch(likeCountry(country))
    }
    const unlikeHandler = name => e => {
        dispatch(unlikeCountry(name))
    }

    return (
        <>
            {loading && <p>Loading</p>}
            {error && <p>{error}</p>}
            {data.length !== 0 && (
                <ul>
                    {data.map(country => (
                        <li key={country.numericCode}>
                            {country.name} ({country.capital})
                            <IconButton 
                                style={{color:"blue"}} 
                                onClick={likeHandler(country)}
                                >
                                <ThumbUp fontSize="small"/>
                            </IconButton>
                            <IconButton 
                                style={{color:"blue"}} 
                                onClick={unlikeHandler(country.name)}
                                >
                                <ThumbDown fontSize="small"/>
                            </IconButton>
                            {/* <button onClick={likeHandler(country)}>Like</button> */}
                            {/* <button onClick={unlikeHandler(country.name)}>Unlike</button> */}
                        </li>
                    ))}
                </ul> 
            )}
        </>
    )
}