import { useRef } from 'react'
import { incrementVote, } from '../reducers/anecdoteReducer'
import { setNotification, resetNotification } from '../reducers/notificationReducer'
import { useSelector, useDispatch } from 'react-redux'

const vote = (dispatcher, id, content, clearTimerRef) => {
  clearTimeout(clearTimerRef.current)

  dispatcher(incrementVote(id))
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
            <button onClick={() => vote(dispatch, anecdote.id, anecdote.content, clearTimerRef)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList