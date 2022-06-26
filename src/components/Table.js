import Article from './Article'




const Table = ({ tasks, onDelete }) => {
    return (
        <div className="table-container">
            <table>
                <tbody>
                    <tr>
                        <th>To Do</th>
                        <th>In Progress</th>
                        <th>Complete</th>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                {/* }
                                {tasks.map((task) => (
                                    task.filter(text) <Article key={task.id} task={task} specify={task.specify} />
                                ))}
                                */}
                                {tasks.filter(task => task.specify === 'todo').map((filtertask) => (
                                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                                ))}
                            </div>
                        </td>
                        <td>
                            <div>
                                {tasks.filter(task => task.specify === 'inprogress').map((filtertask) => (
                                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                                ))}
                            </div>
                        </td>
                        <td>
                            <div>
                                {tasks.filter(task => task.specify === 'complete').map((filtertask) => (
                                    <Article key={filtertask.id} task={filtertask} specify={filtertask.specify} onDelete={onDelete} />
                                ))}
                            </div>
                        </td>
                    </tr>
                </tbody>

            </table>

        </div>
    )
}

export default Table