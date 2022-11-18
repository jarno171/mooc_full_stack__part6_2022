import { updateVote, } from '../reducers/anecdoteReducer'
import { setNotificationFull } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const vote = (dispatcher, id, content, votes) => {
  const updatedAnecdote = {
    id: id,
    content: content,
    votes: votes + 1
  }

  dispatcher(updateVote(updatedAnecdote))
  dispatcher(setNotificationFull(`you voted for "${content}"`, 5))
}

const AnecdoteList = () => {

  const anecdotes = useSelector(state => state.anecdotes)
  const filter = useSelector(state => state.filter)
  const dispatch = useDispatch()

  const anecdotesFiltered = anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(filter.toLowerCase()))

  return (
    <>
      <h2>Anecdotes</h2>
      {anecdotesFiltered.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(dispatch, anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList