
import TableRow from './TableRow'
import '../styles/Table.css'


const Table = ({ tasks, onDelete, setTasks }) => {


    return (
        <div className='table__component'>
            <table>
                <tbody>
                    <tr>
                        <th>To Do</th>
                        <th>In Progress</th>
                        <th>Complete</th>
                    </tr>
                    <TableRow tasks={tasks} onDelete={onDelete} onDrop={setTasks}></TableRow>
                </tbody>

            </table>
        </div>
    )
}

export default Table