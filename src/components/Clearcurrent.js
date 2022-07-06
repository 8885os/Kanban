import React from 'react'

const Clearcurrent = ({ setTasks }) => {

    const onClick = () => {
        setTasks([])
    }

    return (
        <div className='clear-holder' onClick={onClick}>
            <button className='clear-button'>
                Clear Table
            </button>
        </div>
    )
}

export default Clearcurrent