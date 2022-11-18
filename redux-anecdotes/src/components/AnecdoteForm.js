import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const handleAdd = async (createAnecdote, event) => {
  
  event.preventDefault()
  const content = event.target.anecdote.value
  event.target.anecdote.value = ''
  createAnecdote(content)
}

const AnecdoteForm = (props) => {

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={(e) => handleAdd(props.createAnecdote, e)}>
        <div><input name="anecdote" /></div>
        <button >create</button>
      </form>
    </>
  )
}

const mapDispatchToProps = {
  createAnecdote,
}

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm)
export default ConnectedAnecdoteForm