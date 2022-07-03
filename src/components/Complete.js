import React from 'react'
import { useDrop } from 'react-dnd'
import Article from './Article'
const Complete = ({ tasks, onDelete, onDrop }) => {

    const todone = id => {
        const task = tasks.filter((task) => task.id === id)
        task[0].specify = 'complete'
        onDrop(tasks.filter((task) => task.id !== id).concat(task[0]))

    }

    const [{ isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',
        // Props to collect
        drop: (item, monitor) => todone(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    }), [todone])


    return (
        <td ref={drop} style={{ backgroundColor: isOver ? 'rgb(220,220,220)' : '' }}>
            <div>
                {tasks.filter(task => task.specify === 'complete').map((filtertask) => (
                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                ))}
            </div>
            <div style={{ width: '300px', height: '40px' }}></div>
        </td>
    )
}

export default Complete