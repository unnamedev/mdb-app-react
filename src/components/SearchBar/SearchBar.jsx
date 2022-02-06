import React, {useEffect, useRef, useState} from "react"
import {BsSearch} from "react-icons/bs";
import {Content, Wrapper} from "./SearchBar.styles";
import PropTypes from "prop-types";

const SearchBar = ({setSearchTerm}) => {
    const [value, setValue] = useState("")
    const initial = useRef(true)

    useEffect(() => {
        if (initial.current) {
            initial.current = false
            return
        }
        const timer = setTimeout(() => setSearchTerm(value), 500)
        return () => clearTimeout(timer)
    }, [setSearchTerm, value]);

    return (
        <Wrapper>
            <Content>
                <BsSearch size={20}/>
                <input
                    type="text"
                    placeholder="Search Movies"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
            </Content>
        </Wrapper>
    )
}

SearchBar.propTypes = {
    callback: PropTypes.func
}

export default SearchBar
