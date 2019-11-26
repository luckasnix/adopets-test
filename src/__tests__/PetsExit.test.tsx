import React from 'react'
import PetsExit from '../pages/PetsHome/containers/PetsExit/PetsExit'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsExit/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)