import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'

const sortAnecdotes = (anecdotes) => {
  return anecdotes.sort((a,b) => (a.votes > b.votes) ? -1 : ((b.votes > a.votes) ? 1 : 0))
}

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    incrementVote(state, action) {
      const anecdoteToUpdate = state.find(anecdote => anecdote.id === action.payload)
      anecdoteToUpdate.votes += 1

      sortAnecdotes(state)
    },
    addAnecdote(state, action) {
      return state.concat(action.payload)
    },
    appendAnecdote(state, action) {
      return state.concat(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { incrementVote, addAnecdote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}