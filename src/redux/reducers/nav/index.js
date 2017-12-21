import { StackNavigator, initialRouteName } from '../../../navigation/navigator'

const { getStateForAction, getActionForPathAndParams } = StackNavigator.router
const initialState = getStateForAction(
  getActionForPathAndParams(initialRouteName)
)

export const navigationReducer = (state = initialState, action) => {
  const nextState = getStateForAction(action, state)
  return nextState || state
}
