import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { Home } from '../../../../src/modules/home/components/home'

const props = {
  userName: 'Patricinha',
  navigateToProfile: () => null,
  navigateToShoppingBag: () => null
}

describe('<Home />', () => {
  xit('should have a snapshot', () => {
    const wrapper = shallow(<Home {...props} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })

  it('should have guest as default userName', () => {
    expect(Home.defaultProps.userName).toEqual('Guest')
  })
})
