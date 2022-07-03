import Header from "./components/Header";
import Table from "./components/Table";
import AddTask from "./components/AddTask";
import { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { v4 as uuidv4 } from 'uuid';
import SidePanel from "./components/SidePanel";



function App() {

    const [tasks, setTasks] = useState(!localStorage.getItem('item') ? [

        {
            id: uuidv4(),
            text: 'New Items Are Added Here',
            specify: 'todo',
        },
        {
            id: uuidv4(),
            text: 'Drag Item Here For In Progress',
            specify: 'inprogress',

        },
        {
            id: uuidv4(),
            text: 'Drag Here When Done',
            specify: 'complete',

        },
    ] : JSON.parse(localStorage.getItem('item')))

    //Add Task
    const newTask = (text) => {
        const id = uuidv4();
        const specify = 'todo';
        const makeTask = { id, ...text, specify };
        setTasks((tasks) => {
            return [...tasks, makeTask]
        });

    }

    useEffect(() => {
        localStorage.setItem('item', JSON.stringify(tasks))
    }, [tasks]);
    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }


    return (
        <div className="App" >
            <DndProvider backend={HTML5Backend}>
                <div className="container">
                    <Header />
                    <Table tasks={tasks} onDelete={deleteTask} onDrop={setTasks} />
                    <AddTask tasks={tasks} onAdd={newTask} />
                    <SidePanel></SidePanel>
                </div>
            </DndProvider >
        </div>

    );
}

export default App;
