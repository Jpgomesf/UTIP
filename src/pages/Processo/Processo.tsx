import React from 'react'
import { useEffect, useState } from 'react';
import { ProcessTable } from '../../components/Processos/ProcessTable/index.tsx';
import Navbar from '../../components/Navbar'
import { Process } from '../../model/Process';
import dadosProcesso from '../../data/json/processList.json';
import styles from '../../components/Processos/ProcessTable/styles.module.scss';

function Processo ()  {
  const [processes, setProcesses] = useState<Process[]>([]);
  useEffect(() => {
    setProcesses(dadosProcesso);
  }, []);

  return (
    <>

      <main>
        <Navbar />
        <div className={styles.contentContainer}>
            <ProcessTable processes={processes} />
        </div>
        
      </main>
    </>
  )
}

export default Processo;