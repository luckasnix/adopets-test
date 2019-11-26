import React from 'react'
import PetsInput from '../pages/PetsMain/containers/PetsRegister/components/PetsInput'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsInput/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)