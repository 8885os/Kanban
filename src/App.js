import Header from "./components/Header";
import Table from "./components/Table";
import AddTask from "./components/AddTask";
import ClearCurrent from "./components/ClearCurrent";
import { useState, useEffect } from 'react';
import { DndProvider } from "react-dnd-multi-backend";
import HTML5toTouch from 'react-dnd-multi-backend/dist/esm/HTML5toTouch';
import { v4 as uuidv4 } from 'uuid';
import SidePanel from './components/SidePanel'



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


    //table state
    const [tables, setTable] = useState(!localStorage.getItem('table') ? [] : JSON.parse(localStorage.getItem('table')))
    //table header
    const [tableheader, setTableHeader] = useState(!localStorage.getItem('header') ? { header: '', id: '' } : JSON.parse(localStorage.getItem('header')))

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

    useEffect(() => {
        localStorage.setItem('header', JSON.stringify(tableheader))
    }, [tableheader]);


    useEffect(() => {
        localStorage.setItem('table', JSON.stringify(tables))
    }, [tables]);
    //Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const deleteTable = (id) => {
        setTable(tables.filter((table) => table.id !== id))
        if (tables.length === 1) {
            setTasks([])
        }
    }


    return (
        <DndProvider options={HTML5toTouch}>
            <div className="container" >
                <Header tableheader={tableheader} />
                <ClearCurrent setTasks={setTasks} />
                <div className="table-side-container">
                    <Table tasks={tasks} onDelete={deleteTask} setTasks={setTasks} deleteTable={deleteTable} setTable={setTable} tables={tables} setTableHeader={setTableHeader} />
                    <SidePanel tasks={tasks} taskSet={setTasks} tables={tables} setTable={setTable} deleteTable={deleteTable} setTableHeader={setTableHeader} />
                </div>
                <AddTask tasks={tasks} onAdd={newTask} />
            </div>
        </DndProvider >

    );
}

export default App;
