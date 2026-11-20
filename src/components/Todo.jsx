import AddTaskForm from './AddTaskForm.jsx'
import SearchTaskForm from './SearchTaskForm.jsx'
import TodoInfo from './TodoInfo.jsx'
import TodoList from './TodoList.jsx'

const Todo = () => {
  const tasks = [
    {id: 'task-1', title: 'learn react', isDone: true},
    {id: 'task-2', title: 'learn Js', isDone: true},
  ]

  const deleteTask = (id) => {
    console.log(`Удаляем задачу с id: ${id}`)
  }

  const toggleTaskComplete = (taskId, isDone) => {
    console.log(`Задача ${taskId} ${isDone ? 'выполнена' : 'не выполнена'}`)
  }

  const filterTasks = (query) => {
    console.log(`Поиск: ${query}`)
  }

    return (
    <div className="todo">

      <h1 className="todo__title">To Do List</h1>
      <AddTaskForm />

      <SearchTaskForm onSearchInput={filterTasks}/>

      <TodoInfo 
      total={tasks.length} 
      done={tasks.filter(({isDone}) => isDone).length}/>

      <TodoList 
      tasks={tasks} 
      onDeleteTaskButtonClick={deleteTask}
      onTaskCompleteChange={toggleTaskComplete}
      />
    </div>
    )
}

export default Todo