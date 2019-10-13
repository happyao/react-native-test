import Reducer from './reducers'
import { createStore } from 'redux'

export default () => {
  const store = createStore(Reducer)

  return store
}
