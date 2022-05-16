import { React } from 'react';
import { DotsHorizontalIcon } from '@heroicons/react/outline';

import Card from './Card';
import Editable from './Editable';

import "../../styles/kanban/Board.css"

export default function Board() {
    return (
        <div className="board">
            <div className="boardTop">
                <p className="boardTopTitle">
                    To Do <span>2</span>
                </p>
                <DotsHorizontalIcon className="h-6 w-6" aria-hidden="true" />
            </div>
            <div className="boardCards customScroll">
                <Card />
                <Card />
                <Card />
                <Editable displayClass="boardCardsAdd" text="Add Card" placeholder="Enter card title" />
            </div>
        </div>
    )
}