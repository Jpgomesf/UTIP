import React from "react";
import { useState, useEffect } from "react";
import { Process } from "../../../model/Process";
import Modal from "../../Modal/modal";
import styles  from './styles.module.scss';

interface IProcess {
    processes: Process[];
}

type AssignessTypes = {
    [key: string]: string;
}

export function ProcessTable({ processes }: IProcess) {
    const assigneeTypes: AssignessTypes[] = [
        {
            name: 'Flagrante / Inquérito',
            value: 'flagrante-delito-inquerito-policial',
        },
        {
            name: 'Denúncia',
            value: 'denuncia',
        },
        {
            name: 'Defesa Prévia',
            value: 'defesa-previa',
        },
        {
            name: 'AIJ',
            value: 'audiencia-instituicao-julgamento',
        },
        {
          name: 'Sentença',
          value: 'sentenca',
        }
    ];


    //função time stamp para converter a data em dias status 

    //função lógica status
    function processStatus({ assigneeType, status }: Process) {
        switch (assigneeType) {
            case assigneeTypes[0].value:
              if(status <= 30 ) {
                return 'ok' 
              } else if (status <= 45) {
                return 'warning'
              } else {
                return 'critical'
              }
               
            case assigneeTypes[1].value:  
              //return status < 5 ? 'ok' : status > 5 ? 'critical' : 'warning';
              if(status <= 10 ) {
                return 'ok' 
              } else if (status <= 15) {
                return 'warning'
              } else {
                return 'critical'
              }            
            case assigneeTypes[2].value: // alterar essa config pra 10dias 
                //return status < 30 ? 'ok' : status > 30 ? 'critical' : 'warning';
                if(status <= 5 ) {
                  return 'ok' 
                } else if (status <= 8) {
                  return 'warning'
                } else {
                  return 'critical'
                }
                  
            case assigneeTypes[3].value:
                //return status < 10 ? 'ok' : status > 10 ? 'critical' : 'warning';
                if(status <= 25 ) {
                  return 'ok' 
                } else if (status <= 30) {
                  return 'warning'
                } else {
                  return 'critical'
                }    
            case assigneeTypes[4].value:  
              return 'finished'
        }
    }



    const [isOpen, setIsOpen] = useState(false);
    
    function processBox({ id, assigneeType, processNumber, status }: Process){
        return (
            <div key={id} className={styles.processContainer} onClick={() => setIsOpen(true)}>
                
                <span>N° {processNumber}</span>
                <span
                  className={
                    styles[processStatus({ id, assigneeType, processNumber, status })]
                  }
                >
                  {
                    assigneeType != 'sentenca' && 
                    <span>Status: {status} dia
                    {status > 1 ? 's' : ''}
                    </span>
                  }
                  {
                    assigneeType == 'sentenca' && 
                    <span>
                      concluído
                    </span>
                  }
                </span>
            </div>
        )
    }
    
    const [searchNumber, setSearchNumber] = useState('')

    const [promusNumber, setPromusNumber] = useState([])
    

    useEffect(() => {
      
        setPromusNumber(processes);
        //console.log("tovivo")
      
        // filterBySearchNumber(searchNumber)
      
      
    }, [processes]);
    
    useEffect(() => {
      filterBySearchNumber(searchNumber)

      
    }, [searchNumber] );


    
   //melhorar if statement only numbers
    function filterBySearchNumber(number) {
      if(number == ""){
        setPromusNumber(processes)
        
      }  
      else {
        setPromusNumber (processes.filter(process => process.processNumber.toString().startsWith(number))) 
      }
      }
      
      return (
        <>
        <section className='md:container md:mx-auto px-8'>
          <header className="bg-white">
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-1">
            <section className="lg:flex lg:items-center lg:justify-between">
              <div className="flex-1 min-w-0">
                <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">Lei de Tóxicos 11.343/06</h2>
              </div>
            </section>
            </div>
          </header>
        </section>
        <input className={styles.searchBox}
          type="text" 
          placeholder="Search"
          onChange={event => {setSearchNumber(event.target.value)
          }}
        />              
        
        <Modal open={isOpen} onClose={() => setIsOpen(false)}>

        </Modal>
        
        <hr className={styles.line}/>
        <div className={styles.processPerTypeContainer}>
          {assigneeTypes.map(({ name, value }) => {
            return (
            <div key={value} className={styles.processPerType}>
              <h3>{name}</h3>      
              {promusNumber.map((process) => {
                return process.assigneeType == value && processBox(process);
                })}
            </div>
            );
            })}
        </div>


        </>
      );
}