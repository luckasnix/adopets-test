import React from 'react'
import PetsHeader from '../ui/PetsHeader/PetsHeader'
import renderer from 'react-test-renderer'

it(
  'renders correctly',
  () => {
    const tree = renderer.create(<PetsHeader/>).toJSON()
    expect(tree).toMatchSnapshot()
  }
)