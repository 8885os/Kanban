
import TableRow from './TableRow'


const Table = ({ tasks, onDelete, onDrop }) => {


    return (
        <div className="table-container">
            <table>
                <tbody>
                    <tr>
                        <th>To Do</th>
                        <th>In Progress</th>
                        <th>Complete</th>
                    </tr>
                    <TableRow tasks={tasks} onDelete={onDelete} onDrop={onDrop}></TableRow>
                </tbody>

            </table>

        </div>
    )
}

export default Table