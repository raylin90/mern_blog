const initialState = {
    title: "",
    url: "",
    description: "",
    content: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return {
                state: action.payload,
            }
        default:
            return state;
    }
}

export default reducer;