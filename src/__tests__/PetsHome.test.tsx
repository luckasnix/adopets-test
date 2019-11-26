import React from 'react'
import PetsHome from '../pages/PetsHome/PetsHome'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsHome/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)