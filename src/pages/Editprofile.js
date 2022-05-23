import { React } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    return (
        <div className="flex items-center  justify-center min-h-screen bg-[url('images/themis.jpg')]">
           
            <div className="px-8 py-6 mt-4 w-9/12 min-w-max  text-left bg-white shadow-lg">
                
                <h3 className="text-2xl font-bold text-center"> Meu Usuário </h3>
                <form action="">
                
                <div className="text-sm rounded-full mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <img
                        className="h-8 w-8 rounded-full m-auto"
                        style = {{ width: 150, height: 150 }}
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </div> 

                    <div className="flex items-center justify-center">                        
                            <Link to="/dashboard"><button href="/dashboard" className="m-auto px-4 py-1 mt-4 text-white bg-gray-600 rounded-lg hover:bg-gray-900">Alterar Foto</button></Link>
                        </div>                
                <div className="mt-4 ml-6">
                     <label className="block">Novo Email</label>
                        <input id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 ml-6">
                     <label className="block">Confirmar Email</label>
                        <input id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 ml-6">
                            <label className="block" Htmlfor="email">Senha</label>
                            <input id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required 
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div> 
                <div className="mt-4 ml-6">
                            <label className="block" Htmlfor="email">Confirmar Senha</label>
                            <input id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required 
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>    

                <div className="flex items-center justify-end ml-6">
                            <Link to="/dashboard"><button href="/dashboard" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Salvar</button></Link>
                        </div>

                </form>
            </div>

        </div>
    )
}

export default EditProfile;