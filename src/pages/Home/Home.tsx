import React from 'react'
import { useEffect, useState } from 'react';
import { ProcessTable } from '../../components/ProcessTable/index.tsx';
import Navbar from '../../components/Navbar'
import { Process } from '../../model/Process';
import processess from '../../repositories/processList.json';
import styles from './styles.module.scss';

const Home = () => {
  const [processes, setProcesses] = useState<Process[]>([]);
  useEffect(() => {
    setProcesses(processess);
  }, []);

  return (
    <>

      <main className={styles.pageContainer}>
      <Navbar />

      <div className={styles.contentContainer}>
          <ProcessTable processes={processes} />
        </div>
      </main>
    </>
  )
}

export default Home;