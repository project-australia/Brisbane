import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { LoginForm } from '../../../../src/modules/authentication/components/loginForm'

const props = {
  buttonText: 'foo-bar',
  alert: { showAlert: false, message: '' }
}

describe('<LoginForm />', () => {
  xit('should have a snapshot', () => {
    const wrapper = shallow(<LoginForm {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
})
