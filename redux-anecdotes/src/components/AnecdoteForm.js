import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteForm = (props) => {

  const handleAdd = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch(addAnecdote(content))
  }

  const dispatch = useDispatch()

  return (
    <>
      <form onSubmit={handleAdd}>
        <div><input name="anecdote" /></div>
        <button >create</button>
      </form>
    </>
  )
}

export default AnecdoteForm