import { React } from "react";
import { XIcon } from "@heroicons/react/solid";

import "../../styles/kanban/Chip.css"

export default function Chip(props) {
    return (
        <div className="chip" style={{ backgroundColor: props.color }}>
            {props.text}
            {props.close && <XIcon onClick={props.onClose ? props.onClose() : ""} />}
        </div>
    )
}
