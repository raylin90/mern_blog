const reducer = (state = {}, action) => {
    switch(action.type) {
        case "ERRORS":
            return {
                state: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;