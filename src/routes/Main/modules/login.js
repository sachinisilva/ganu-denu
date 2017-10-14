// import dotProp from 'dot-prop-immutable-chain'
import 'whatwg-fetch'
// import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_SIGNIN_MODAL_VISIBILITY = 'SET_SIGNIN_MODAL_VISIBILITY'
export const SET_SIGNUP_MODAL_VISIBILITY = 'SET_SIGNUP_MODAL_VISIBILITY'

// ------------------------------------
// Actions
// ------------------------------------

export const setSigninnModalVisibility = (isOpen) => {
  return {
    type: SET_SIGNIN_MODAL_VISIBILITY,
    payload: isOpen
  }
}

export const setSignupModalVisibility = (isOpen) => {
  return {
    type: SET_SIGNUP_MODAL_VISIBILITY,
    payload: isOpen
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_SIGNIN_MODAL_VISIBILITY]: (state, action) => {
    return { ...state, login: Object.assign({}, ...state.login, { isSigninModalOpen: action.payload }) }
  },
  [SET_SIGNUP_MODAL_VISIBILITY]: (state, action) => {
    return { ...state, login: Object.assign({}, ...state.login, { isSignUpModalOpen: action.payload }) }
  }
}

export const initialState = {
  isSigninModalOpen: false,
  isSignUpModalOpen: false
}
export default function loginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
