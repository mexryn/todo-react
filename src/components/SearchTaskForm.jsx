import Field from './Field.jsx'
const SearchTaskForm = () => {
    return (
    <form className="todo__form">
        <Field 
        className='todo__field'
        label='Search task'
        id='seacrh-task'
        type='seacrh'
        />
    </form>
    )
}

export default SearchTaskForm