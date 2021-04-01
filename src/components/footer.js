import React from "react"
import * as styles from "../styles/footer.module.css"
import caretSquareUp from "../svg/caret-square-up.svg"

export default function Footer() {
    return (
        <div className={styles.div}>
            <div className={styles.divcell}>©bumpsoo063@protonmail.ch</div>
            <div className={styles.divcell}>
            <img src={caretSquareUp} alt="hi" className={styles.svg} onClick={go}></img>
            </div>
            
        </div>
    )
}

function go() {
    window.scrollTo(0,0);
}

