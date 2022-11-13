import { useDispatch } from 'react-redux'
import { addAnecdote } from '../reducers/anecdoteReducer'

const handleAdd = (dispatcher, event) => {
  
  event.preventDefault()
  const content = event.target.anecdote.value
  event.target.anecdote.value = ''
  dispatcher(addAnecdote(content))
}

const AnecdoteForm = (props) => {

  const dispatch = useDispatch()

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={(e) => handleAdd(dispatch, e)}>
        <div><input name="anecdote" /></div>
        <button >create</button>
      </form>
    </>
  )
}

export default AnecdoteForm