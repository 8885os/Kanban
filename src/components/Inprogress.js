import React from 'react'
import { useDrop } from 'react-dnd'
import Article from './Article'
const Inprogress = ({ tasks, onDelete, onDrop }) => {

    const toinprogress = id => {
        const task = tasks.filter((task) => task.id === id)
        task[0].specify = 'inprogress'
        onDrop(tasks.filter((task) => task.id !== id).concat(task[0]))

    }

    const [{ isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',
        // Props to collect
        drop: (item, monitor) => toinprogress(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    }), [toinprogress])

    return (
        <td ref={drop} style={{ backgroundColor: isOver ? 'rgb(220,220,220)' : '' }}>
            <div>
                {tasks.filter(task => task.specify === 'inprogress').map((filtertask) => (
                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                ))}
            </div>
            <div style={{ width: '300px', height: '40px' }}></div>
        </td>
    )
}

export default Inprogress