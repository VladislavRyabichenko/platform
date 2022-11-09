import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'

import reducers from './combine'

export const store = createStore(
  reducers,
  applyMiddleware(thunk)
)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reducers>
