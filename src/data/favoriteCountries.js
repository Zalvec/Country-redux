/*****************/
/* INITIAL STATE */
/*****************/
const initialState = []

/*********/
/* TYPES */
/*********/
const LIKE_COUNTRY = "LIKE_COUNTRY"
const UNLIKE_COUNTRY = "UNLIKE_COUNTRY"

/*******************/
/* ACTION CREATORS */
/*******************/
export const likeCountry = payload => ({
    type: LIKE_COUNTRY,
    payload
})
export const unlikeCountry = name => ({
    type: UNLIKE_COUNTRY,
    payload: name
})

/***********/
/* REDUCER */
/***********/
export default (state = initialState, { type, payload}) => {
    switch(type) {
        case LIKE_COUNTRY: return [...state, payload]
        case UNLIKE_COUNTRY: return state.filter( data => data.name !== payload)
        default: return state
    }
}
