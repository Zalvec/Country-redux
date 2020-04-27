import axios from "axios";

/*****************/
/* INITIAL STATE */
/*****************/
const initialState = {
    error: "",
    loading: false,
    data: [],
}

/*********/
/* TYPES */
/*********/
const MOVIE_START = "MOVIE_START"
const MOVIE_SUCCESS = "MOVIE_SUCCESS"
const MOVIE_ERROR = "MOVIE_ERROR"

/*******************/
/* ACTION CREATORS */
/*******************/
export const getCountries = str => dispatch => {
    dispatch(loadCountries())
    axios
        .get("https://restcountries.eu/rest/v2/name/" + str)
        .then(response => {
            if (response.data.message === "Not Found") return dispatch(setError("Sorry, we couldn't connect with the API endpoint"))
            else return dispatch(setCountries(response.data))
        })
        .catch(error => dispatch(setError(`No countries found for '${str}'`)))
}

export const loadCountries = () => ({ type: MOVIE_START})
export const setError = msg => ({ type: MOVIE_ERROR, payload: msg })
export const setCountries = countries => ({ type: MOVIE_SUCCESS, payload: countries})

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload}) => {
    switch(type) {
        case MOVIE_START: return {...state, loading: true, error: ""}
        case MOVIE_SUCCESS: return {...state, loading: false, data: payload}
        case MOVIE_ERROR: return {...state, loading: false, error: payload}
        default: return state
    }
}
