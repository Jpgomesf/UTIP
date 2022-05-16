import { React, useState } from 'react';
import { XIcon } from '@heroicons/react/outline';

import "../../styles/kanban/Editable.css";


export default function Editable(props) {
    const [showEdit, setShowEdit] = useState(false);
    return (
        <div className="editable">
            { showEdit ? (
            <form className={`editableEdit ${props.editClass || ""}`} 
            onSubmit={(event) => {
                event.preventDefault();
                if (props.onSubmit) props.onSubmit();
            }}>
                <input type="text" defaultValue={props.text} placeholder={props.placeholder || "Enter item"} />
                
                <div className="editableEditFooter">
                    <button type="submit">{props.buttonText || "Add"}</button>
                    <XIcon className="h-6 w-6" aria-hidden="true" onClick={() => setShowEdit(false)} />
                </div>
            </form>
            ) : ( 
                <p className={`editableDisplay ${props.displayClass || ""}`} onClick={() => setShowEdit(true)}>{props.text || "Add item"}</p>
            )}
        </div>
    )
}