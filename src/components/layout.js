import React from "react"
import Header from "./header.js"
import Navigation from "./navigation.js"
import Footer from "./footer.js"
import * as styles from "../styles/layout.module.css"

export default function Layout({ children }) {
    return (
        <div>
            <header>
                <Header/>
            </header>
            <Navigation/>
            <center>
                <div className={styles.div}>
                    {children} 
                </div>
            </center>
            <center><footer><Footer/></footer></center>
                      
        </div>
    )
}