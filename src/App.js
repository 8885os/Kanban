import Header from "./components/Header";
import Table from "./components/Table";
import AddTask from "./components/AddTask";
import { createContext, useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from 'uuid';

export const context = createContext([

])


function App() {

    const [tasks, setTasks] = useState([

        {
            id: uuidv4(),
            text: 'Meeting at place',
            specify: 'todo',
        },
        {
            id: uuidv4(),
            text: 'Shopping',
            specify: 'inprogress',

        },
        {
            id: uuidv4(),
            text: 'Appointment',
            specify: 'complete',

        },
    ])

    //Add Task
    const newTask = (text) => {
        const id = uuidv4();
        var specify = 'todo'
        const makeTask = { id, ...text, specify }
        setTasks([...tasks, makeTask])

    }
    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    return (
        <div className="newbody" >
            <DndProvider backend={HTML5Backend}>
                <div className="container">
                    <Header />
                    <Table tasks={tasks} onDelete={deleteTask} onDrop={setTasks} />
                </div>
                <div>
                    <AddTask tasks={tasks} onAdd={newTask} />
                </div>
            </DndProvider >
        </div>

    );
}

export default App;
