import React from "react";
import { DotsHorizontalIcon, ClockIcon, ClipboardCheckIcon } from '@heroicons/react/outline';

import Chip from "./Chip";

import "../../styles/kanban/Card.css"

export default function Card() {
    return (
        <div className="card">
            <div className="cardTop">
                <div className="cardTopLabels">
                    <Chip text="Frontend" color="green" aria-hidden="true" />
                </div>
                <DotsHorizontalIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="cardTitle">
                tuts tuts
            </div>
            <div className="cardFooter">
                <p><ClockIcon className="h-4 w-4" aria-hidden="true" />29 Sept</p>
                <p><ClipboardCheckIcon className="h-4 w-4" aria-hidden="true" />1/4</p>
            </div>
        </div>
    )
}