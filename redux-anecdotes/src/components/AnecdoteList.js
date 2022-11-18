import { updateVote, } from '../reducers/anecdoteReducer'
import { setNotificationFull } from '../reducers/notificationReducer'
import { connect } from 'react-redux'

const vote = (props, id, content, votes) => {
  const updatedAnecdote = {
    id: id,
    content: content,
    votes: votes + 1
  }

  props.updateVote(updatedAnecdote)
  props.setNotificationFull(`you voted for "${content}"`, 5)
}

const AnecdoteList = (props) => {

  const anecdotes = props.anecdotes

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
            <button onClick={() => vote(props, anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.filter(anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase()))
  }
}

const mapDispatchToProps = {
  updateVote,
  setNotificationFull,
}

const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchToProps)(AnecdoteList)
export default ConnectedAnecdotes