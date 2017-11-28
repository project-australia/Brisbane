import React from 'react'
import { Text, View } from 'react-native'
import { shallow } from 'enzyme'
import { AuthenticationFilter } from '../../../../src/modules/shared/containers/authenticatedHOC'
import { NOT_LOGGED_IN } from '../../../../src/redux/reducers/authentication/constants'

describe('Authentication decorator', () => {
  const props = {
    one: 1,
    two: 2
  }

  const filterProps = {
    user: NOT_LOGGED_IN,
    redirectTo: <Text/>
  }

  const LOGGED_IN_USER = {uid: 123, email: 'a@b.c', phoneNumber: '123-456-7890', emailVerified: true}

  it('should filter unauthenticated user to access screen, redirecting to another screen', async () => {
    const aScreen = <View {...props} />
    const filteredScreen = (
      <AuthenticationFilter {...filterProps}>
        <aScreen/>
      </AuthenticationFilter>
    )

    const wrapper = shallow(filteredScreen)

    expect(wrapper.contains(aScreen)).toEqual(false)
    expect(wrapper.contains(filterProps.redirectTo)).toEqual(true)
  })

  it('should not filter authenticated user to access screen', async () => {
    const notFilteredScreen = (
      <AuthenticationFilter {...filterProps} user={LOGGED_IN_USER}>
        <View {...props} />
      </AuthenticationFilter>
    )

    const wrapper = shallow(notFilteredScreen)

    expect(wrapper.props()).toEqual(props)
    expect(wrapper.equals(<View {...props} />)).toEqual(true)
    expect(wrapper.contains(filterProps.redirectTo)).toEqual(false)
  })
})
