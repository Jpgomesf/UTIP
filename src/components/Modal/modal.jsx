import React from "react"
import styles from './styles.modules.scss'

function Modal () {
    return (
        <div className={styles.modalBg}>
            <div className={styles.modalContainer}>
                <div className={styles.title}> Modal </div>           
                <div className={styles.body}>  </div>           
                <div className={styles.footer}>  </div>              
            </div>
        </div>
    )
}
export default Modal;