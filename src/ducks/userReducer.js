import axios from 'axios'

const initialState = {
    email: null,
    firstName: null,
    lastName: null
}

const REQUEST_USER_DATA = 'REQUEST_USER_DATA'

export function requestUserData() {
    const requestPromise = axios.get('/auth/user-data').then(res => {
        console.log("res.data is: ", res.data)
        return res.data
    })
    return {
        type: REQUEST_USER_DATA,
        payload: requestPromise
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case REQUEST_USER_DATA + '_FULFILLED':
            const { email, firstName, lastName } = action.payload.user
            console.log("user details: ", email, firstName, lastName)
            return { email, firstName, lastName }
        default:
            return state

    }
}