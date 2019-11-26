import React from 'react'
import PetsParams from '../pages/PetsHome/containers/PetsParams/PetsParams'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsParams/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)