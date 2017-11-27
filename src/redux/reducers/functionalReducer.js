import Maybe from 'data.maybe'

export function createReducer (reducerConfig) {
  const { actionHandlers, initialState } = reducerConfig
  return (state, action) =>
    Maybe
      .fromNullable(actionHandlers[action.type])
      .map(handler => handler(state, action))
      .getOrElse(initialState)
}
