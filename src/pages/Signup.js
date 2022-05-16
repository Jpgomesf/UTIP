import { React } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

export default function LogIn() {
  return (
    <>
      <div className="flex items-center  justify-center min-h-screen bg-[url('images/themis.jpg')]">
          
          <div className="px-8 py-6 mt-4 w-9/12 min-w-max  text-left bg-white shadow-lg">
               
                <h3 className="text-2xl font-bold text-center">Register</h3>
                <form action="">
                    <div className="mt-4 grid grid-cols-2 ">
                        <div className="mt-2 ml-6">
                            <label className="block" for="nome">Nome Completo</label>
                                    <input 
                                      id="name"
                                      name="name"
                                      type="text"
                                      required
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-2 ml-6">
                            <label className="block">CPF</label>
                                    <input id="endereço"
                                        name="endereço"
                                        type="text"
                                        required 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">CEP</label>
                                    <input id="cep"
                                        name="cep"
                                        type="text"
                                        required 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Telefone</label>
                                    <input id="telefone"
                                        name="telefone"
                                        type="tel"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Cidade</label>
                                    <input id="cidade"
                                        name="cidade"
                                        type="text"
                                        required 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Email</label>
                            <input    id="email-address"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      required
                                      className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Estado</label>
                                    <input id="estado"
                                        name="estado"
                                        type="text"                                       
                                        required 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block" for="email">Password</label>
                            <input id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required 
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Endereço</label>
                                    <input id="endereço"
                                        name="endereço"
                                        type="text"
                                        required 
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4 ml-6">
                            <label className="block">Confirm Password</label>
                                    <input id="password"
                                        name="password"
                                        type="password"
                                        required 
                                        placeholder="Confirm password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="flex items-center ml-6">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className=" mt-2 h-4  w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 mt-2 block text-sm text-gray-900">
                            Concordo com os termos de serviço 
                          </label>
                        </div>
                    </div>
                        <div className="flex items-center justify-between ml-6">
                            <Link to='/'><button href="/" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Sign Up</button></Link>
                        </div>
                  </form>
              
          </div>
      </div>
    </>
  )
}