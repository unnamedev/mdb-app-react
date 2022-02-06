import React from "react"
import {Content, Text, Wrapper} from "./Hero.styles"
import PropTypes from "prop-types";

const Hero = ({image, name, text}) =>
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{name}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>

Hero.propTypes = {
    image: PropTypes.string,
    name: PropTypes.string,
    text: PropTypes.string,
}

export default Hero
