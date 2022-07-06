import React from 'react'
import { IoMdAdd } from 'react-icons/io'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import Switchtable from './Switchtable';

const SidePanel = ({ tasks, taskSet, tables, setTable, deleteTable, setTableHeader }) => {

    const [currname, setName] = useState('')

    const onClick = (e) => {
        const makeitem = { id: uuidv4(), name: currname, tasklist: tasks }
        setTable((tables) => {

            return [...tables, makeitem]
        })
        setTableHeader({ header: currname, id: makeitem.id })

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
                    <Switchtable taskSet={taskSet} tasks={tasks} tables={tables} setTable={setTable} deleteTable={deleteTable} setTableHeader={setTableHeader} ></Switchtable>
                </ol>
            </div>
        </div>
    )
}

export default SidePanel