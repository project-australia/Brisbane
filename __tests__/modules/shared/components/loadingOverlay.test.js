import React from 'react'
import { View } from 'react-native'
import { shallow } from 'enzyme'
import { LoadingOverlay } from '../../../../src/modules/shared/components/loadingOverlay'

describe('<LoadingOverlay />', () => {
  it('should pass down style parameter', async () => {
    let style = { flex: 1 }
    const aStyledLoadingOverlay = (
      <LoadingOverlay isLoading style={style}>
        <View />
      </LoadingOverlay>
    )
    const wrapper = shallow(aStyledLoadingOverlay)

    expect(wrapper.prop('style')).toEqual(style)
  })

  it('should show a overlay if component is loading', async () => {
    const aComponent = <View isLoading={false} />
    const overlayedComponent = (
      <LoadingOverlay isLoading>{aComponent}</LoadingOverlay>
    )

    asserThatOverlayIsShowing(overlayedComponent, aComponent)
  })

  it('should NOT show a overlay if component is loading', async () => {
    const aComponent = <View isLoading={false} />
    const overlayedComponent = (
      <LoadingOverlay isLoading={false}>{aComponent}</LoadingOverlay>
    )

    assertThatOverlayIsNotShowing(overlayedComponent, aComponent)
  })

  describe('Overlay based on child component', () => {
    it('should show a overlay if a children component is loading', async () => {
      const aComponent = <View isLoading />
      const overlayedComponent = (
        <LoadingOverlay isLoading={false}>{aComponent}</LoadingOverlay>
      )

      asserThatOverlayIsShowing(overlayedComponent, aComponent)
    })
  })
})

function asserThatOverlayIsShowing(overlayedComponent, aComponent) {
  const wrapper = shallow(overlayedComponent)
  expect(wrapper.contains(aComponent)).toEqual(true)
  expect(wrapper.children()).toHaveLength(2)
}

function assertThatOverlayIsNotShowing(overlayedComponent, aComponent) {
  const wrapper = shallow(overlayedComponent)
  expect(wrapper.contains(aComponent)).toEqual(true)
  expect(wrapper.children()).toHaveLength(1)
}
