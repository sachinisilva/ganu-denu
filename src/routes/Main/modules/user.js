import cookie from 'react-cookie'

// ------------------------------------
// Constants
// ------------------------------------

// ------------------------------------
// Actions
// ------------------------------------

// ------------------------------------
// Local functions
// ------------------------------------
export const getUserId = () => {
  return generateUserId()
}

export const generateUserId = () => {
  const userId = Math.floor((1 + Math.random()) * 10000000)
  // cookie.save('userId', userId, { path: '/' })
  return userId
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {}

// ------------------------------------
// Reducer
// ------------------------------------
export const initialState = { id: getUserId() }
export default function userReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
