const initialState = {
    title: "",
    url: "",
    content: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return {
                state: action.payload,
            }
        case "ERROR":
            return {
                state: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;