import React from "react"
import {Content, Wrapper} from "./InfoBar.styles";
import {calcTime, convertMoney} from "../../helpers";
import PropTypes from "prop-types";

const InfoBar = ({time, budget, revenue}) =>
    <Wrapper>
        <Content>
            <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>
            <div className="column">
                <p>Budget time: {convertMoney(budget)}</p>
            </div>
            <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>
        </Content>
    </Wrapper>

InfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default InfoBar
