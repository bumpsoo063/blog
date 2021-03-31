import React from "react"
import {Link} from "gatsby"
import * as styles from "./navigation.module.css"

export default function Navigation() {
    return (
            <nav className={styles.nav}>
                <li className={styles.li}>
                    <ul className={styles.ul}>Rev</ul>
                    <ul className={styles.ul}>Dev</ul>
                    <ul className={styles.ul}>Inv</ul>
                </li>
            </nav>
    )
}