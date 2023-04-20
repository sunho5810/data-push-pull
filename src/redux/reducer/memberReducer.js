let initState = {
    membersList: {},
    loading: false
}

function memberReducer(state = initState, action){
    let {type, payload} = action;

    switch (type) {
        case "GET_DATA_REQUEST":
            return {
                ...state,
                loading: true
            }
        case "GET_DATA_SUCCESS":
            return {
                ...state,
                membersList: payload.data,
                loading: false
            }
        case "GET_DATA_FAILED":
            return {
                ...state,
                loading: false
            }
        default:
            return {...state}
    }
}

export default memberReducer;