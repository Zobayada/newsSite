import { type } from "@testing-library/user-event/dist/type";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "./reducer";


const api = "https://hn.algolia.com/api/v1/search?";

const initial = {
    isLoading: "true",
    query: "",
    nbPages: 0,
    page: 0,
    hits: []
}

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initial);

    const fetchApi = async (url) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            dispatch({
                type: "GET_NEWS",
                payload: {
                    hits: data.hits,
                    nbPages: data.nbPages
                }
            })
        } catch (error) {
            console.log(error);
        }
    }

    // Remove Data
    const removeData = (postID) => {
        dispatch({ type: "REMOVE_DATA", payload: postID });
    }

    //Search Post
    const searchPost = (searchData) => {
        dispatch({ type: "SEARCH_POST", payload: searchData })
    }

    //Pagination Button
    const prevPage = () => {
        dispatch({ type: "PREV_PAGE" })
    }
    const nextPage = (searchData) => {
        dispatch({ type: "NEXT_PAGE" })
    }

    //Call API
    useEffect(() => {
        fetchApi(`${api}query=${state.query}&page=${state.page}`);
    }, [state.query, state.page]);

    return <AppContext.Provider value={{ ...state, removeData, searchPost, prevPage, nextPage }}>
        {children}
    </AppContext.Provider>
};

const useGlobalContext = () => {
    return useContext(AppContext);
}

export { AppContext, AppProvider, useGlobalContext };