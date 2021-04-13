import React from "react"
import {Link} from "gatsby"
import * as styles from "../styles/navigation.module.css"

export default function Navigation() {
    return (
            <nav className={styles.nav}>
                <li className={styles.li}>
                    <ul className={styles.ul}><Link to="/Rev">Rev</Link></ul>
                    <ul className={styles.ul}><Link to="/Dev">Dev</Link></ul>
                    <ul className={styles.ul}><Link to="/Inv">Inv</Link></ul>
                </li>
            </nav>
    )
}