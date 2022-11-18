import { createSlice } from '@reduxjs/toolkit'

const initialState = ''
let clearTimerRef = {}

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    setNotification(state, action) {
      return action.payload
    },
    resetNotification(state, action) {
      return ''
    }
  }
})

export const { setNotification, resetNotification } = notificationSlice.actions
export default notificationSlice.reducer

export const setNotificationFull = (content, timeOutDuration) => {
  return async dispatch => {
    clearTimeout(clearTimerRef.current)

    dispatch(setNotification(content))

    clearTimerRef.current = setTimeout(() => {
      dispatch(resetNotification())
    }, timeOutDuration * 1000)
  }
}