import React from 'react'
import { useDrop } from 'react-dnd'
import Article from './Article'

const Todo = ({ tasks, onDelete, onDrop }) => {

    const todo = id => {
        const task = tasks.filter((task) => task.id === id)
        task[0].specify = 'todo'
        onDrop(tasks.filter((task) => task.id !== id).concat(task[0]))

    }

    const [{ isOver }, drop] = useDrop(() => ({
        // The type (or types) to accept - strings or symbols
        accept: 'BOX',
        // Props to collect
        drop: (item, monitor) => todo(item.id),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
        })
    }))

    return (
        <td ref={drop} style={{ backgroundColor: isOver ? 'rgb(220,220,220)' : '' }}>
            <div>
                {tasks.filter(task => task.specify === 'todo').map((filtertask) => (
                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                ))}
            </div>
        </td>
    )
}

export default Todo