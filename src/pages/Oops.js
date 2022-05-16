import { React } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Oops() {
    let navigate = useNavigate();
    return (
        <div>
            <h1 className="text-4xl tracking-tight font-bold text-gray-600 sm:text-4xl md:text-5xl">Página não encontrada :/</h1>
            <br/>
            <button className="border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-md md:px-6" onClick={() => {
                navigate("/");
            }}>
                {" "}
                Voltar para página inicial</button>
        </div>
    )
}