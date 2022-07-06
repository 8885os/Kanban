import React from 'react'
import { useState } from 'react'
import { RiSave3Fill, RiDeleteBin6Line } from 'react-icons/ri'

const Switchtable = ({ tasks, tables, taskSet }) => {

    const [currname, setname] = useState('')

    const onClick = ((e) => {
        const setTableTask = tables.filter(item => item.id === e.target.id)
        console.log("newdebugs", setTableTask)
        taskSet(setTableTask[0].tasklist)
    })

    console.log("here", tasks);


    return (
        <div className='table-buttons'>
            {tables.map((tablename) => (
                <li>
                    <button className='table-button' onClick={onClick} value={currname} id={tablename.id} key={tablename.id}>
                        {tablename.name} <RiDeleteBin6Line className='delete-table' /> <RiSave3Fill className='save-table' />
                    </button>
                </li>
            ))}

        </div>
    )
}

export default Switchtable