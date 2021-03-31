import React from "react"
import logo from "./logo.png"
import * as styles from "./header.module.css"
import {Link} from "gatsby"

export default function Header() {
  return (
    <div className={styles.logo}>
      <Link to="/"><img src={logo} alt="logo"/></Link>       
    </div>
  )
}