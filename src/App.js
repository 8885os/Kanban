import Header from "./components/Header";
import Table from "./components/Table";
import AddTask from "./components/AddTask";
import { useState } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";



function App() {

    const [tasks, setTasks] = useState([

        {
            id: 1,
            text: 'Meeting at place',
            specify: 'todo',
        },
        {
            id: 2,
            text: 'Shopping',
            specify: 'inprogress',

        },
        {
            id: 3,
            text: 'Appointment',
            specify: 'complete',

        },
    ])

    //Add Task
    const newTask = (text) => {
        const id = Math.floor(Math.random() * 10000) + 1;
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
                    <Table tasks={tasks} onDelete={deleteTask} />
                </div>
                <div>
                    <AddTask tasks={tasks} onAdd={newTask} />
                </div>
            </DndProvider>
        </div>
    );
}

export default App;
