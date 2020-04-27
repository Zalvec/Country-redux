import React from 'react'
import Countries from './Countries'
import CountryForm from './CountryForm'
import FavoriteCountries from './FavoriteCountries'
import { Box, Container, Grid } from '@material-ui/core'

export default () => {
    return (
        <>
            <Box>
                <Container maxWidth="lg" style={{ width: "90%", margin: "0 auto", textAlign: 'center' }}>
                    <h1>Welcome to the Country Find-/Lik-ER 3000</h1>
                    <p>Below you have 2 fields. Left search for different counties which you can like. To the right the ones you liked.</p>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <CountryForm />
                            <Countries />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <FavoriteCountries />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}