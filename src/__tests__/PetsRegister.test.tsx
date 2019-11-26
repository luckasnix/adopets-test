import React from 'react'
import PetsRegister from '../pages/PetsMain/containers/PetsRegister/PetsRegister'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsRegister/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)