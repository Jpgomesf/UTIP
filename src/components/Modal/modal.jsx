import React from "react"
import ReactDOM  from "react-dom"
import styles from './styles.module.scss'
import { Link } from "react-router-dom";


function Modal ({open, children, onClose}) {
    if(!open) return null
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} />
            <div className={styles.modal}>
                <button onClick={onClose} className={styles.close}></button>            
                <h1 className={styles.h1}>Process Number</h1>
                <hr />
                <h2 className={styles.status}>Process Status</h2>
                <h3 className={styles.type}>Process type</h3>
                <p className={styles.crucial}>Crucial information: Lorem, ipsum dolor sit amet consectetur adipisicing 
                    elit. Asperiores quidem sit quae, sequi velit delectus officia. 
                    Eveniet consequuntur illum labore enim harum nihil delectus expedita accusantium,
                    ad repudiandae vero ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sunt nostrum! Cum nemo tempore expedita? Fugiat, reiciendis voluptas. 
                    Pariatur molestiae delectus nisi accusantium odit mollitia ea voluptatum, nulla est accusamus.
                    Asperiores quidem sit quae, sequi velit delectus officia. 
                    Eveniet consequuntur illum labore enim harum nihil delectus expedita accusantium,
                    ad repudiandae vero ipsa! Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, sunt nostrum! Cum nemo tempore expedita? Fugiat, reiciendis voluptas. 
                    Pariatur molestiae delectus nisi accusantium odit mollitia ea voluptatum, nulla est accusamus.
                    Asperiores quidem sit quae, sequi velit delectus officia. 
                </p>
                <Link to="/infoprocesso" className={styles.moreInfo} target="_blank"> Mais informações </Link>           
            </div>
        </>,
        document.getElementById('portal')
    )
}
export default Modal;