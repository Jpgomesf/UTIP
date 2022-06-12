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
            <section className='md:container md:mx-auto px-8'>
            <header className="bg-white">
                <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-1">
                <section className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="mt-1 max-w-2xl text-xl text-gray-500">Número do processo</h1>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">1234567.00.2023.1.23.4567</h2>
                    </div>
                </section>

                <br></br>

                <section className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="mt-1 max-w-2xl text-xl text-gray-500">Status do processo</h1>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Em andamento</h2>
                    </div>
                    
                    <div className="flex-1 min-w-0">
                        <h1 className="mt-1 max-w-2xl text-xl text-gray-500">Tipo penal</h1>
                        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Tipicidade Imediata</h2>
                    </div>    
                </section>

                <br></br>

                <section className="lg:flex lg:items-center lg:justify-between">
                    <div className="flex-1 min-w-0">
                    <label className="form-label inline-block mb-2 text-gray-700 max-w-2xl text-xl">Descrição</label>
                        <textarea
                        className="
                            form-control
                            block
                            w-full
                            px-4
                            py-1.5
                            text-base
                            font-normal
                            text-gray-700
                            bg-white bg-clip-padding
                            border border-solid border-gray-300
                            rounded
                            transition
                            ease-in-out
                            m-0
                            focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "
                        rows="3"
                        placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ante ante, luctus vel tempor et, mollis quis nunc. Aliquam nunc leo, lacinia eget nulla non, faucibus laoreet ex. Morbi ac odio euismod mi consectetur tempor. Maecenas dignissim fringilla sapien viverra rhoncus. Pellentesque lobortis velit ac massa finibus, nec rhoncus sapien laoreet." disabled
                        ></textarea>
                    </div>  
                </section>                     
                </div>       
            </header>

            <br></br>

            <Link to="/infoprocesso"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"
                type="button"
                target="_blank"
            >
                Mais informações
            </Link>
            </section>     
        </div>
        </>,
        document.getElementById('portal')
    )
}
export default Modal;