import React from "react"
import * as styles from "../styles/footer.module.css"
import triangle from "../png/iconmonstr-triangle-4-240.png"

export default function Footer() {
    return (
        <center>
        <div className={styles.div}>
            <div className={styles.divcell}>©bumpsoo063@protonmail.ch</div>
            <div className={styles.divcell}>
            <img src={triangle} alt="hi" className={styles.png} onClick={go}></img>
            </div>
        </div>
        </center>
    )
}

function go() {
    window.scrollTo(0,0);
}

