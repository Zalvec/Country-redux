import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { unlikeCountry } from '../data/favoriteCountries'
import { Favorite } from '@material-ui/icons/';
import { IconButton, Card, CardHeader, CardMedia, CardContent, Typography, Grid } from '@material-ui/core'


export default () => {
    const likedData = useSelector(state => state.favoriteCountries)
    const dispatch = useDispatch()
    const unlikeHandler = name => e => {
        dispatch(unlikeCountry(name))
    }
    console.log(likedData)
    return (
        <>
            <Typography variant="h4" color="textSecondary" style={{margin: ".6em 0"}}>Your liked countries</Typography>
            {likedData.length === 0 && <Typography variant="body2" color="textSecondary" component="p">No liked countries</Typography>}
            {likedData.length !== 0 && (
              <Grid container spacing={4} direction="column">
              {likedData.map(country => (
                <Grid item >
                  <Card>
                    <Grid container>
                      <Grid item xs={4}>
                        <CardMedia image={country.flag} title="Flag" style={{height: "70px", width: "105px"}}/>
                      </Grid>
                      <Grid item xs={4}>
                        <CardHeader title={country.name} />
                      </Grid>
                      <Grid item xs={4}>
                        <IconButton 
                            style={{color:"blue"}} 
                            onClick={unlikeHandler(country.name)}
                        >
                          <Favorite fontSize="large" className='globalColor'/>
                        </IconButton>
                      </Grid>
                    </Grid>
                    
                    
                    <CardContent>
                        <Typography variant="body2" color="textSecondary" component="p">Capital: {country.capital}</Typography>
                        {country.population >= 1000000 && <Typography variant="body2" color="textSecondary" component="p">Population: {(country.population / 1000000).toFixed(2)} million</Typography>}
                        {country.population < 1000000 && <Typography variant="body2" color="textSecondary" component="p">Population: {country.population}</Typography>}
                        <Typography variant="body2" color="textSecondary" component="p">Region: {country.subregion} - {country.region}</Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
          </Grid>
            )}
        </>
    )
}

