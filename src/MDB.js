import React from "react"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import {GlobalStyles} from "./GlobalStyles"
import Header from "./components/Header/Header"
import Home from "./components/Home"
import NotFound from "./components/NotFound"
import Detail from "./components/Detail"

const MDB = () => {
    return (
        <Router>
            <GlobalStyles/>
            <Header/>
            <Routes>
                <Route path="/" exact element={<Home/>}/>
                <Route path="/:movieId" exact element={<Detail/>}/>
                <Route path="/*" exact element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default MDB
