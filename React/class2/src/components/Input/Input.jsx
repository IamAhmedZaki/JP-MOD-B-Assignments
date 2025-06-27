import React from "react";

import styles from "./Input.module.css"

import Button from "../Button/Button";

let Input=()=>{
    return(
        <>
        <input 
        className={styles.logout}
        type="password"
        placeholder="Enter Password"

        maxLength={5}
        />
        
        <Button/>
        </>
        
        
        
    )
}


export default Input