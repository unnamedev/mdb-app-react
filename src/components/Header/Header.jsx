import React from "react"
import {Link} from "react-router-dom";
import {Content, LogoImg, TMDBLogoImg, Wrapper} from "./Header.styles"
import MDBLogo from "../../images/react-movie-logo.svg"
import TMDBLogo from "../../images/tmdb_logo.svg"

const Header = () =>
    <Wrapper>
        <Content>
            <Link to="/">
                <LogoImg src={MDBLogo} alt="MDB logo"/>
            </Link>
            <TMDBLogoImg src={TMDBLogo} alt="TMDB logo"/>
        </Content>
    </Wrapper>

export default Header
