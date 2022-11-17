import { useRef } from 'react'
import { updateVote, } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const vote = (dispatcher, id, content, votes, clearTimerRef) => {
  clearTimeout(clearTimerRef.current)

  const updatedAnecdote = {
    id: id,
    content: content,
    votes: votes + 1
  }

  dispatcher(updateVote(updatedAnecdote))
  dispatcher(setNotification(`you voted for "${content}"`))

  clearTimerRef.current = setTimeout(() => {
    dispatcher(resetNotification())
  }, 5000)
}

const AnecdoteList = () => {

  const clearTimerRef = useRef();

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
            <button onClick={() => vote(dispatch, anecdote.id, anecdote.content, anecdote.votes, clearTimerRef)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList