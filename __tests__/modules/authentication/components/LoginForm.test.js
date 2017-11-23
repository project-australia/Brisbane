import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../../../../src/modules/authentication/components/LoginForm'

const props = {
  foo: 'bar'
}

describe('<LoginForm />', () => {
  it('should have a snapshot', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(wrapper).toMatchSnapshot()
  })
})
