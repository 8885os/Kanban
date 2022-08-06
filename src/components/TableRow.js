import React from 'react'
import Todo from './Todo'
import Inprogress from './Inprogress'
import Complete from './Complete'
import '../styles/TableRow.css'

function TableRow({ tasks, onDelete, onDrop }) {



    return (
        <tr>
            <Todo tasks={tasks} onDelete={onDelete} onDrop={onDrop}></Todo>
            <Inprogress tasks={tasks} onDelete={onDelete} onDrop={onDrop}></Inprogress>
            <Complete tasks={tasks} onDelete={onDelete} onDrop={onDrop}></Complete>
        </tr >
    )
}

export default TableRow