import { incrementVote, } from '../reducers/anecdoteReducer'
import { useSelector, useDispatch } from 'react-redux'

const vote = (dispatcher, id) => {
  dispatcher(incrementVote(id))
}

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
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
            <button onClick={() => vote(dispatch, anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList