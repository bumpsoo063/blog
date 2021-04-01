import React from "react"
import logo from "../png/logo.png"
import * as styles from "../styles/header.module.css"
import {Link} from "gatsby"

export default function Header() {
  return (
    <div className={styles.logo}>
      <Link to="/"><img src={logo} alt="logo"/></Link>       
    </div>
  )
}