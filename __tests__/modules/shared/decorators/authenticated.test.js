import React from 'react'
import { View } from 'react-native'
import { authenticated } from '../../../../src/modules/shared/decorators/authenticated'
import { shallow } from 'enzyme/build/index'
import { AuthenticatedHOC } from '../../../../src/modules/shared/containers/authenticatedHOC'

// FIXME: Mock redux before testing
xdescribe('Authentication decorator', () => {
  const props = {
    one: 1,
    two: 2
  }

  it('should decorate a component with AuthenticatedHOC', async () => {
    const aComponent = <View {...props} />
    const DecoratedComponent = authenticated(aComponent)
    const wrapper = shallow(<DecoratedComponent />)
    expect(wrapper.contains(<AuthenticatedHOC />)).toEqual(true)
    expect(wrapper.children().contains(<AuthenticatedHOC />)).toEqual(true)
  })
})
