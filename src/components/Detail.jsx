import React from "react"
import {useDetailFetch} from "../hooks/useDetailFetch"
import {useParams} from "react-router-dom";
import {Spinner} from "./Spinner/Spinner.styles"
import Breadcrumbs from "./Breadcrumbs/Breadcrumbs";
import Info from "./Info/Info";
import InfoBar from "./InfoBar/InfoBar";
import Grid from "./Grid/Grid";
import Actor from "./Actor/Actor";
import noImage from "../images/no_image.jpg"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../config"

const Detail = () => {
    const {movieId} = useParams()
    const {state: movie, loading, error} = useDetailFetch(movieId)

    if (loading) return <Spinner/>

    if (error) return <div>Something wrong...</div>

    return <>
        <Breadcrumbs movieTitle={movie.original_title}/>
        <Info movie={movie}/>
        <InfoBar time={movie.runtime} budget={movie.budget} revenue={movie.revenue}/>
        <Grid header="Actors">
            {movie.actors.map((actor) =>
                <Actor
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}` : noImage}
                />
            )}
        </Grid>
    </>

}

export default Detail
