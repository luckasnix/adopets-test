import React from 'react'
import PetsMain from '../pages/PetsMain/PetsMain'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsMain/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)