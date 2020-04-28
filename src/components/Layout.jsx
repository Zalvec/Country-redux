import React from 'react'
import Countries from './Countries'
import CountryForm from './CountryForm'
import FavoriteCountries from './FavoriteCountries'
import { Box, Container, Grid, AppBar, Toolbar, Typography } from '@material-ui/core'

export default () => {
    return (
        <>
            <Box>
                <AppBar position="static">
                    <Toolbar className="globalBackgroundColor">
                        <Typography variant="h6" style={{ margin: "0 auto" }} >
                        Country-liker
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Container maxWidth="lg" style={{ width: "90%", margin: "0 auto", textAlign: 'center' }}>
                    <Grid container spacing={6} >
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