import React from 'react'
import { useState } from 'react'
import { RiSave3Fill, RiDeleteBin6Line } from 'react-icons/ri'

const Switchtable = ({ tasks, tables, taskSet, deleteTable, setTableHeader, setTable }) => {

    const [currname, setname] = useState('')


    const saveTable = (id, e) => {

        const newstate = tables.map(obj => {
            if (obj.id === id) {
                return { ...obj, tasklist: tasks }
            }
            return obj
        })
        setTable(newstate)

    }

    const onClick = ((e) => {
        const setTableTask = tables.filter(item => item.id === e.target.id)
        taskSet(setTableTask[0].tasklist)
        setTableHeader({ header: setTableTask[0].name, id: e.target.id })
    })

    return (
        <div className='table-buttons'>
            {tables.map((tablename) => (
                <li>
                    <button className='table-button' onClick={onClick} value={currname} id={tablename.id} key={tablename.id}>
                        {tablename.name} <RiDeleteBin6Line className='delete-table' onClick={() => deleteTable(tablename.id)} /> <RiSave3Fill className='save-table' onClick={(e) => saveTable(tablename.id, e)} />
                    </button>
                </li>
            ))}

        </div>
    )
}

export default Switchtable