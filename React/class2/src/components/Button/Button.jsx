import React from "react"
import styles from './Button.module.css'

const Button=()=>{
    return(
        <>
        <button className={styles.btn}>Submit</button>
        <button className={styles.logout}>Logout</button>
        </>
    )
}

export default Button