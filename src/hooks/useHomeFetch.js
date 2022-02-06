import {useEffect, useState} from "react"
import API from "../API"
import {isPersistedState} from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
}

export const useHomeFetch = () => {
    // States
    const [searchTerm, setSearchTerm] = useState("")
    const [state, setState] = useState(initialState)
    const [errors, setErrors] = useState(false)
    const [loading, setLoading] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    const fetchMovies = async (page, searchTerm = "") => {
        try {
            setErrors(false)
            setLoading(true)

            const movies = await API.fetchMovies(searchTerm, page)

            setState(prev => ({
                ...movies,
                results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
            }));

            setLoading(false)
        } catch (e) {
            setErrors(true)
        }
        setLoading(false);
    }

    // Initial
    useEffect(() => {
        fetchMovies(1)
    }, [])

    // Search
    useEffect(() => {
        if (!searchTerm) {
            const sessionState = isPersistedState("homeState")

            if (sessionState) {
                console.log("Grabbing from sessionStorage")
                setState(sessionState)
                return
            }
        }

        console.log("Grabbing from API")
        setState(initialState);
        fetchMovies(1, searchTerm);
    }, [searchTerm]);

    // Load more
    useEffect(() => {
        if (!isLoadingMore) return
        fetchMovies(state.page + 1, searchTerm)
        setIsLoadingMore(false)
    }, [isLoadingMore, searchTerm, state.page])

    // Write to sessionStorage
    useEffect(() => {
        if (!searchTerm) sessionStorage.setItem("homeState", JSON.stringify(state))
    }, [searchTerm, state])

    return {state, errors, loading, searchTerm, setSearchTerm, setIsLoadingMore}
}