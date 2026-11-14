import TodoItem from './TodoItem'   // ← вот этот импорт — главный подозреваемый

const TodoList = ({ tasks }) => {
  const hasTasks = tasks.length > 0 

  if (!hasTasks) {
    return <div className="todo__empty-message">No tasks</div>
  }

  return (
    <ul className='todo__list'>
      {tasks.map((task) => {
      return <TodoItem key={task.id} 
      {...task}/> 
      })}
    </ul>
  )
}

export default TodoList