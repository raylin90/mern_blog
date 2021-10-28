const initialState = {}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_USER":
            return {
                state: action.payload,
            }
        case "NULL_USER":
            return {
                state: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;