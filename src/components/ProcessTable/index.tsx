import React from "react";
import { Process } from "../../model/Process";
import   styles  from './styles.module.scss';

interface IProcess {
    processes: Process[];
}

type AssignessTypes = {
    [key: string]: string;
}

export  function ProcessTable({ processes }: IProcess) {
    const assigneeTypes: AssignessTypes[] = [
        {
            name: 'Flagrante / Delito',
            value: 'prisao-flagrante-delito',
        },
        {
            name: 'Inquérito Policial',
            value: 'inquerito-policial',
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
            name: 'Audiência / Julgamento',
            value: 'audiencia-instituicao-julgamento',
        }
    ];


    //função time stamp para converter a data em dias status 

    //função lógica status
    function processStatus({ assigneeType, status }: Process) {
        switch (assigneeType) {
            case assigneeTypes[0].value:
            case assigneeTypes[3].value:
                //return status < 30 ? 'ok' : status > 30 ? 'critical' : 'warning';
                if(status <= 25 ) {
                  return 'ok' 
                } else if (status <= 30) {
                  return 'warning'
                } else {
                  return 'critical'
                }
                  

            case assigneeTypes[1].value:  
                //return status < 5 ? 'ok' : status > 5 ? 'critical' : 'warning';
                if(status <= 3 ) {
                  return 'ok' 
                } else if (status <= 5) {
                  return 'warning'
                } else {
                  return 'critical'
                }
            case assigneeTypes[2].value:            
            case assigneeTypes[4].value:
                //return status < 10 ? 'ok' : status > 10 ? 'critical' : 'warning';
                if(status <= 7 ) {
                  return 'ok' 
                } else if (status <= 10) {
                  return 'warning'
                } else {
                  return 'critical'
                }            
                
        }
    }

    //função box 
    function processBox({ id, assigneeType, processNumber, status }: Process){
        return (
            <div key={id} className={styles.processContainer}>
                <span>N° {processNumber}</span>
                <span
                  className={
                    styles[processStatus({ id, assigneeType, processNumber, status })]
                  }
                >
                  Status: {status} dia
                  {status > 1 ? 's' : ''}
                </span>
            </div>
        )
    }

    //hr=linha no browser
    return (
        <div >  
          
          <h1 className={styles.law}>Lei de Tóxicos 11.343/06</h1>
          
          <hr />
          
          
            <div className={styles.processPerTypeContainer}>
              {assigneeTypes.map(({ name, value }) => {
                return (
                  <div key={value} className={styles.processPerType}>
                    <h3>{name}</h3>
      
                    {processes.map((process) => {
                      return process.assigneeType == value && processBox(process);
                    })}
                  </div>
                );
              })}
            </div>
                     
        </div>  
      );
}