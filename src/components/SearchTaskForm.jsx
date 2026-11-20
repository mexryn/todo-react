import Field from './Field.jsx'

const SearchTaskForm = (props) => {
    const {
        onSearchInput,
    } = props
    return (
    <form className="todo__form">
        <Field 
        className='todo__field'
        label='Search task'
        id='seacrh-task'
        type='seacrh'
        onInput={(event) => {onSearchInput(event.target.value)}}
        />
    </form>
    )
}

export default SearchTaskForm