// import dotProp from 'dot-prop-immutable-chain'
import 'whatwg-fetch'
// import _ from 'lodash'

// ------------------------------------
// Constants
// ------------------------------------
export const SET_ITEMS = 'SET_ITEMS'

// ------------------------------------
// Actions
// ------------------------------------

export const setItems = (list = []) => {
  return {
    type: SET_ITEMS,
    payload: list
  }
}

export const getItems = () => {
  return (dispatch, getState) => {
    // this should come after service is ready
    // return fetch('/api/items?creatorId=' + getState().user.id)
    //   .then(response => response.json())
    //   .then(json => dispatch(setItems(json.items)))
    let response = {
      items: [
        {
          id: 12121212,
          name: 'A'
        },
        {
          id: 33344333,
          name: 'B'
        },
        {
          itemId: 23232323,
          name: 'C'
        }
      ]
    }
    return dispatch(setItems(response.items))
  }
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SET_ITEMS]: (state, action) => {
    let items = action.payload.map(item =>
      ({ selected: false,
        item: item }))
    return items
  }
}

const initialState = []
export default function itemListReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
