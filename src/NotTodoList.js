import { useState } from 'react';

const NotTodoList = () => {

    const initialState = [
        {
            task: '個人開発',
            isCompleted: false
        },
        {
            task: 'Reactを触ってみる',
            isCompleted: false
        },
        {
            task: '朝7時に起きる',
            isCompleted: false
        },     
    ]

    const [todos, setTodos] = useState(initialState);
    const [task, setTask] = useState('')

    const handleNewTask = (event) => {
        console.log(event.target.value)
        setTask( event.target.value )
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if(task === '') return
        setTodos(todos => [...todos,{ task, isCompleted: false}])
        setTask('')
    }

    return (
        <div>
            <h2>NOT TODO LIST</h2>
            <p>
            ここに記載されていることは"絶対に"やってはいけません
            </p>
            <form onSubmit={handleSubmit}>
                <input
                    value={task}
                    class="font-control"
                    placeholder="Add New Task"
                    onChange={handleNewTask}
                />
                <button type="submit" class="add-button">Add</button>
            </form>
            <ul>
                { todos.map((todo, index) => (
                <li key={ index }>{ todo.task }</li>
                ))}
            </ul>
        </div>
  );
}

export default NotTodoList;