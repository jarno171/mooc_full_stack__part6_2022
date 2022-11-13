import { incrementVote, } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'


const AnecdoteList = () => {

  const vote = (id) => {
    dispatch(incrementVote(id))
  }

  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList