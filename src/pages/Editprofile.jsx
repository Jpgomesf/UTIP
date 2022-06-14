import { React, useEffect, useRef, useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const EditProfile = () => {
    const previewCanvasRef = useRef(null);
    const [imgSrc, setImgSrc] = useState("https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80");

    function onSelectFile(e) {
        if (e.target.files && e.target.files.length > 0) {
            const reader = new FileReader();
            reader.addEventListener('load', () => setImgSrc(reader?.result?.toString() || ''));
            reader.readAsDataURL(e.target.files[0]);
        }
    }

    useEffect(() => {
        const canvas = previewCanvasRef.current;
        const ctx = canvas?.getContext('2d');
        if (ctx) {
            let img = new Image();
            ctx.imageSmoothingQuality = 'high';
            img.src = imgSrc;
            img.onload = () => {
                ctx.drawImage(img, 0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
            };
        }
    }, [imgSrc]);
        return (
        <div className="flex items-center  justify-center min-h-screen bg-[url('images/themis.jpg')]">
           
            <div className="px-8 py-6 mt-4 w-9/12 min-w-max  text-left bg-white shadow-lg">
                <h3 className="text-2xl font-bold text-center"> Meu Usuário </h3>
                <form action="">
                
                <div className="text-sm rounded-full mt-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <canvas
                        ref={previewCanvasRef}
                        className="h-8 w-8 rounded-full m-auto"
                        style = {{ width: 150, height: 150 }}
                        alt=""
                      />
                    </div> 

                    <div className="flex items-center justify-center">                        
                        <input type="file" accept="image/*" onChange={onSelectFile} required className="inline-flex items-center mt-4 px-2 py-1 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-zinc-600 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-500"/>  
                    </div>                
                <div className="mt-4 ml-6">
                     <label className="block" htmlFor="email">Novo Email</label>
                        <input id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 ml-6">
                     <label className="block" htmlFor="email">Confirmar Email</label>
                        <input id="email-address"
                                  name="email"
                                  type="email"
                                  autoComplete="email"
                                  required
                                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>
                <div className="mt-4 ml-6">
                            <label className="block" htmlFor="password">Senha</label>
                            <input id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required 
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div> 
                <div className="mt-4 ml-6">
                            <label className="block" htmlFor="password">Confirmar Senha</label>
                            <input id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required 
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                </div>    

                <div className="flex items-center justify-end ml-6">
                            <Link to="/dashboard"><button href="/dashboard" className="px-6 py-2 mt-4 mx-4 text-white bg-gray-500 rounded-lg hover:bg-gray-400">Cancelar</button></Link>
                            <Link to="/dashboard"><button href="/dashboard" className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Salvar</button></Link>
                        </div>

                </form>
            </div>

        </div>
    )
}

export default EditProfile;