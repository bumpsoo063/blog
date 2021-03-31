import React from "react"
import Header from "./header.js"
import Navigation from "./navigation.js"

export default function Layout({ children }) {
    return (
        <div>
            <header><Header/></header>
            <Navigation/>
            {children}   
        </div>
    )
}