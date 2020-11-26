import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Container from '../src/website/layout/Container'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Container />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
