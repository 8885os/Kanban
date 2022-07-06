import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Switchtable from './Switchtable';

const SidePanel = ({ tasks, taskSet, tables, setTable }) => {

    const [currname, setName] = useState('')

    const onClick = (e) => {
        setTable((tables) => {
            const makeitem = { id: uuidv4(), name: currname, tasklist: tasks }
            return [...tables, makeitem]
        })
        taskSet(() => [

            {
                id: uuidv4(),
                text: 'New Items Are Added Here',
                specify: 'todo',
            },
            {
                id: uuidv4(),
                text: 'Drag Item Here For In Progress',
                specify: 'inprogress',

            },
            {
                id: uuidv4(),
                text: 'Drag Here When Done',
                specify: 'complete',

            },
        ])

        console.log("thisdeubyg", tasks)
    }
    return (
        <div className='side-panel'>
            <h3>
                To Do Tables
            </h3>
            <div className='list-holder'>
                <ol>
                    <li>
                        <input className='making-new' onChange={(e) => setName(e.target.value)} value={currname}></input>
                        <IoMdAdd className='add' onClick={onClick} />
                    </li>
                    <Switchtable taskSet={taskSet} tasks={tasks} tables={tables} ></Switchtable>
                </ol>
            </div>
        </div>
    )
}

export default SidePanel