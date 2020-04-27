import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { unlikeCountry } from '../data/favoriteCountries'
import { IconButton } from '@material-ui/core'
import { ThumbDown } from '@material-ui/icons/';


export default () => {
    const likedData = useSelector(state => state.favoriteCountries)
    const dispatch = useDispatch()
    const unlikeHandler = name => e => {
        dispatch(unlikeCountry(name))
    }
    console.log(likedData)
    return (
        <>
            <h2>Your liked countries</h2>
            {likedData.length === 0 && <p>No liked countries</p>}
            {likedData.length !== 0 && (
              <ul>
                {likedData.map(likedCountry => (
                  <li key={likedCountry.numericCode}>
                    {likedCountry.name} ({likedCountry.capital})
                    <IconButton 
                        style={{color:"blue"}} 
                        onClick={unlikeHandler(likedCountry.name)}
                        >
                        <ThumbDown fontSize="small"/>
                    </IconButton>
                    {/* <button onClick={unlikeHandler(likedCountry.name)}>Unlike</button> */}
                  </li>
                ))}
              </ul>
            )}
        </>
    )
}
