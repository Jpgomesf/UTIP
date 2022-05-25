import  React,  { useState, useContext }  from 'react';
import { AuthContext } from '../context/auth';

const LogIn = () => {
  const { authenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, password });
    login(email, password);
  };
      
  return (
    <>
      
      <div  className="flex items-center  justify-center min-h-screen bg-[url('images/justice.jpg')]">
        
          <div className="px-8 py-6 mt-4 w-3/14 min-w-max text-left bg-white shadow-lg">
                <div className="flex justify-center">
                    <img src='/logobk.svg' className='w-auto h-10 mb-10' alt=''/>
                </div>
                <form className="form" onSubmit={handleSubmit}>
                    <div className="mt-4">
                        <div>
                            <label className="block" htmlFor="email">Email</label>
                                    <input 
                                      value={email}
                                      onChange={(e) => setEmail(e.target.value)}
                                      id="email-address"
                                      name="email"
                                      type="email"
                                      autoComplete="email"
                                      required
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="mt-4">
                            <label className="block" htmlFor="password">Password</label>
                                    <input 
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        placeholder="Password"
                                        className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"/>
                        </div>
                        <div className="flex items-center">
                          <input
                            id="remember-me"
                            name="remember-me"
                            type="checkbox"
                            className=" mt-2 h-4  w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                          />
                          <label htmlFor="remember-me" className="ml-2 mt-2 block text-sm text-gray-900">
                            Lembre-se de mim
                          </label>
                        </div>
                        <div className="flex items-baseline justify-between">
                            <button className="px-6 py-2 mt-6 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type="submit">Login</button>
                            <a href="/signup" className="text-sm ml-6 hover:underline">Não tem uma conta? Registre-se!</a>
                        </div>
                    </div>
                  </form>
              
          </div>
      </div>
     
    </>
  )
}

export default  LogIn;