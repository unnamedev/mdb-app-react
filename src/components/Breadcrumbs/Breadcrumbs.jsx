import React from "react"
import {Link} from "react-router-dom"
import {Content, Wrapper} from "./Breadcrumbs.styles"
import PropTypes from "prop-types"

const Breadcrumbs = ({movieTitle}) =>
    <Wrapper>
        <Content>
            <Link to="/">Home</Link>
            <span>|</span>
            <span>{movieTitle}</span>
        </Content>
    </Wrapper>

Breadcrumbs.propTypes = {
    movieTitle: PropTypes.string,
}

export default Breadcrumbs
