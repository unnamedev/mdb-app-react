import React from "react"
import { v4 as uuidv4 } from 'uuid'
import {useHomeFetch} from "../hooks/useHomeFetch"
import Hero from "./Hero/Hero"
import {BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE} from "../config"
import noImage from "../images/no_image.jpg"
import Grid from "./Grid/Grid"
import Thumb from "./Thumb/Thumb"
import {Spinner} from "./Spinner/Spinner.styles"
import SearchBar from "./SearchBar/SearchBar"
import Button from "./Button/Button"

const Home = () => {
    const {state, errors, loading, searchTerm, setSearchTerm, setIsLoadingMore} = useHomeFetch()

    if (errors) return <div>Something wrong...</div>

    return <>
        {/* Hero */}
        {!searchTerm && state.results[0] ?
            <Hero image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                  name={state.results[0].original_title} text={state.results[0].overview}/> : null}

        {/* Search Bar*/}
        <SearchBar setSearchTerm={setSearchTerm}/>

        {/* Movies Grid */}
        <Grid header={searchTerm ? "Search Results:" : "Popular Movies"}>
            {state.results.map((movie) =>
                <Thumb
                    key={uuidv4()}
                    movieId={movie.id}
                    clickable
                    image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : noImage}
                />
            )}
        </Grid>

        {/* Spinner */}
        {loading && <Spinner/>}

        {/*  Load More  */}
        {state.page < state.total_pages && !loading &&
            <Button text="Load More" callback={() => setIsLoadingMore(true)}/>}
    </>
}

export default Home
