import { React } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';


const IncludeProcess = () => {
   return (
      <>

         <Navbar />
         <div className="flex items-center  justify-center min-h-screen bg-[url('images/justice.jpg')]">

            <div className="px-8 py-6 mt-4 w-9/12 min-w-max  text-left bg-white shadow-lg">


               <form action="">

                  <h3 className="text-2xl font-bold text-left"> Informações do Processo: </h3>

                  <div className="mt-4 grid grid-cols-2 ">
                     <div className="mt-4 ml-6">

                        <label className="block" htmlFor="text">Número do Processo</label>
                        <input id="number-process"
                           name="number-process"
                           type="number" placeholder="Digite o número do processo"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Dia da Prisão</label>
                        <input id="date-prision"
                           name="date"
                           type="date"
                           autoComplete="date"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Tipo Penal</label>
                        <input id="type-process"
                           name="tipo-process"
                           type="text"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Local do Crime</label>
                        <input id="local-crime"
                           name="localcrime"
                           type="text"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Data do Crime</label>
                        <input id="date-crime"
                           name="data-crime"
                           type="date"
                           autoComplete="date"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Nº PCNET</label>
                        <input id="number-pcnet"
                           name="numero-pcnet"
                           type="number"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Nº REDS</label>
                        <input id="number-reds"
                           name="numero-reds"
                           type="number"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Nº Inquérito Policial</label>
                        <input id="number-police"
                           name="numero-inquerito"
                           type="number"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                  </div>
                  <div className="mt-4 grid grid-cols-2 ">                     
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Nome do Acusado</label>
                        <input id="name-accused"
                           name="nome-acusado"
                           type="name"
                           autoComplete="name"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Filiação</label>
                        <input id="parents-accused"
                           name="filiação-acusado"
                           type="name"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Data de Nascimento</label>
                        <input id="born-accused"
                           name="nascimento-acusado"
                           type="date"
                           autoComplete="date"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Naturalidade</label>
                        <input id="City-accused"
                           name="naturalidade-acusado"
                           type="text"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Endereço</label>
                        <input id="address-address"
                           name="endereço-acusado"
                           type="text"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Telefone</label>
                        <input id="phone-accused"
                           name="telefone-acusado"
                           type="number"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="name">Advogado</label>
                        <input id="lawyer"
                           name="advogado"
                           type="name"
                           autoComplete="name"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Defensoria Pública</label>
                        <input id="df"
                           name="text"
                           type="text"
                           autoComplete="text"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     <div className="mt-4 ml-6">
                        <label className="block" htmlFor="text">Número da OAB</label>
                        <input id="oab-number"
                           name="numero-oab"
                           type="number"
                           autoComplete="number"
                           required
                           className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                     </div>
                     
                  </div>
                  <div className="flex items-center justify-end ml-6">
                     <Link to="/dashboard"><button href="/dashboard" className="px-6 py-2 mt-4 mx-4 text-white bg-gray-500 rounded-lg hover:bg-gray-400">Cancelar</button></Link>
                     <button href="/dashboard" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Salvar</button>
                  </div>
               </form>
            </div>
         </div>
      </>
   )
}


export default IncludeProcess;