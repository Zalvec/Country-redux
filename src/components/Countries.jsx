import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { Favorite, FavoriteBorder} from '@material-ui/icons/';
import { IconButton, Card, CardHeader, CardMedia, CardContent, Typography, Grid, LinearProgress } from '@material-ui/core'
import { likeCountry, unlikeCountry } from '../data/favoriteCountries'

export default () => {
    const { loading, error, data} = useSelector(state => state.countries)
    const favorite = useSelector(state => state.favoriteCountries)
    const dispatch = useDispatch()

    const arrLikedCountries = favorite.map(likedCountry => likedCountry.name)
    const likeHandler = country => e => {
        dispatch(likeCountry(country))
    }
    const unlikeHandler = name => e => {
        dispatch(unlikeCountry(name))
    }

    return (
        <>
            {loading && <LinearProgress />}
            {error && <Typography variant="body2" color="textSecondary" component="p">{error}</Typography>}
            {data.length !== 0 && (
                <Grid container spacing={4} direction="column">
                    {data.map(country => (
                      <Grid item >
                        <Card>
                          <Grid container>
                            <Grid item xs={4}>
                              <CardMedia image={country.flag} title="Flag" style={{height: "50px", width: "80px"}}/>
                            </Grid>
                            <Grid item xs={4}>
                              <CardHeader title={country.name} />
                            </Grid>
                            <Grid item xs={4}>
                              {!arrLikedCountries.includes(`${country.name}`) && 
                                <IconButton 
                                    style={{color:"blue"}} 
                                    onClick={likeHandler(country)}
                                >
                                    <FavoriteBorder fontSize="large"/>
                                </IconButton>
                              }
                              {arrLikedCountries.includes(`${country.name}`) && 
                                <IconButton 
                                    style={{color:"blue"}} 
                                    onClick={unlikeHandler(country.name)}
                                >
                                    <Favorite fontSize="large"/>
                                </IconButton>
                              }
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

