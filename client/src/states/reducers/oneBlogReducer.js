const reducer = (state = {}, action) => {
    switch(action.type) {
        case "GET_ONE_BLOG":
            return {
                state: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;