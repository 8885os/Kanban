import React from 'react'
import { useRef } from 'react';
import { RiSave3Fill, RiDeleteBin6Line } from 'react-icons/ri'

const MapItem = ({ data, clickItem, saveTable, deleteTable, currname }) => {

    const ulRef = useRef(null);
    return (
        <li ref={ulRef}>
            <button className='table-button' onClick={clickItem} value={currname} id={data.id} >
                {data.name} <RiDeleteBin6Line className='delete-table' onClick={() => deleteTable(data.id)} /> <RiSave3Fill className='save-table' onClick={() => saveTable(data.id, ulRef)} />
            </button>
        </li>
    )
}

export default MapItem