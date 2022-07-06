import React from 'react'
import { useState } from 'react'

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
                        {tablename.name}
                    </button>
                </li>
            ))}

        </div>
    )
}

export default Switchtable