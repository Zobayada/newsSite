const reducer = (state, action) => {
    switch (action.type) {
        case "SET_LOADING": {
            return {
                ...state,
                isLoading: true
            }
        }
        case "GET_NEWS":
            return {
                ...state,
                isLoading: false,
                hits: action.payload.hits,
                nbPages: action.payload.nbPages
            }
        case "REMOVE_DATA":
            return {
                ...state,
                hits: state.hits.filter((curElement) => curElement.objectID !== action.payload)
            }
        case "SEARCH_POST":
            return {
                ...state,
                query: action.payload
            }
        case "PREV_PAGE":
            let pageNum = state.page - 1;

            if (pageNum <= 0) {
                pageNum = 0
            }

            return {
                ...state,
                page: pageNum
            }
        case "NEXT_PAGE":
            let pageInc = state.page + 1;

            if (pageInc >= state.nbPages) {
                pageInc = 0
            }

            return {
                ...state,
                page: pageInc
            }
    }

    return state;
}
export default reducer;