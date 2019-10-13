import { CHANGE_USER, CHANGE_SECTION } from '../actions'
const initialState = {
  user: {},
  section: 'users'
}
const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_USER:
      return {
        ...state,
        user: Object.assign({}, action.user)
      }
    case CHANGE_SECTION:
      return {
        ...state,
        section: action.section
      }

    default:
      return state
  }
}

export default mainReducer
