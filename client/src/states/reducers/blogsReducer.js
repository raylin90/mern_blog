const initialState = {
    title: "",
    url: "",
    content: "",
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "GET_BLOGS":
            return {
                ...state,
                blogs: action.payload,
                loading:false,
            }
        case "ERROR":
            return {
                ...state,
                blogs: action.payload,
                loading:false,
            }
        default:
            return state;
    }
}

export default reducer;