import React from "react"
import noImage from "../../images/no_image.jpg"
import {Content, Text, Wrapper} from "./Info.styles"
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../config"
import Thumb from "../Thumb/Thumb"
import PropTypes from "prop-types";

const Info = ({movie}) =>
    <Wrapper backdrop={movie.backdrop_path}>
        <Content>
            <Thumb image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : noImage}
                   clickable={false}/>
            <Text>
                <h1>{movie.title}</h1>
                <h3>PLOT</h3>
                <p>{movie.overview}</p>

                <div className="rating-directors">
                    <div className="rating-directors__item">
                        <h3>RATING</h3>
                        <div className="score">{movie.vote_average}</div>
                    </div>
                    <div className="rating-directors__item">
                        <h3>DIRECTOR{movie.directors.length > 1 ? "S" : ""}</h3>
                        {movie.directors.map(director => <p key={director.credit_id}>{director.name}</p>)}
                    </div>
                </div>
            </Text>
        </Content>
    </Wrapper>

Info.propTypes = {
    movie: PropTypes.object
}

export default Info
