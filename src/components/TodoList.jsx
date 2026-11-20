import TodoItem from './TodoItem'   

const TodoList = ({ tasks, onDeleteTaskButtonClick, onTaskCompleteChange }) => {
  const hasTasks = tasks.length > 0 

  if (!hasTasks) {
    return <div className="todo__empty-message">No tasks</div>
  }

  return (
    <ul className='todo__list'>

      {tasks.map((task) => (
      <TodoItem 

      key={task.id} 
      {...task}
      onDeleteTaskButtonClick={onDeleteTaskButtonClick}
      onTaskCompleteChange={onTaskCompleteChange}/>
      ))}

    </ul>
  )
}

export default TodoList