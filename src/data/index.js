import { createStore, applyMiddleware, combineReducers } from 'redux'
import countriesReducer from './countries'
import favoriteCountriesReducer from './favoriteCountries'

import logger from 'redux-logger'
import thunk from 'redux-thunk'

export default createStore(
    combineReducers({
        countries: countriesReducer,
        favoriteCountries: favoriteCountriesReducer
    }),
    applyMiddleware(thunk, logger)
)