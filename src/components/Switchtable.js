import React from 'react'
import { useState } from 'react'
import MapItem from './MapItem'

const Switchtable = ({ tasks, tables, taskSet, deleteTable, setTableHeader, setTable }) => {

    const [currname] = useState('')

    const saveTable = (id, test) => {

        const newstate = tables.map(obj => {
            if (obj.id === id) {
                return { ...obj, tasklist: tasks }
            }
            return obj
        })
        setTable(newstate)

        test.current.classList.add('flash-save')

        setTimeout(function () {
            test.current.classList.remove('flash-save');
        }, 100)

    }

    const clickItem = ((e) => {
        const setTableTask = tables.filter(item => item.id === e.target.id)
        taskSet(setTableTask[0].tasklist)
        setTableHeader({ header: setTableTask[0].name, id: e.target.id })
    })

    return (
        <div className='table-buttons'>
            {tables.map((item, i) => (
                <MapItem key={item.id} data={item} deleteTable={deleteTable} saveTable={saveTable} currname={currname} clickItem={clickItem} />
            ))}

        </div>
    )
}

export default Switchtable