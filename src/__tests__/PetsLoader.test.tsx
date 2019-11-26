import React from 'react'
import PetsLoader from '../ui/PetsLoader/PetsLoader'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsLoader/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)