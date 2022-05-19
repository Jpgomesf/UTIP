import React from 'react'
import { useEffect, useState } from 'react';
import { ProcessTable } from '../components/ProcessTable/index.tsx';
import Navbar from '../components/Navbar'
import { Process } from '../model/Process';
import processess from '../repositories/processList.json';


const Home = () => {
  const [processes, setProcesses] = useState<Process[]>([]);
  useEffect(() => {
    setProcesses(processess);
  }, []);

  return (
    <>
      <Navbar />

      <div>
          <ProcessTable processes={processes} />
        
        </div>
    </>
  )
}

export default Home;