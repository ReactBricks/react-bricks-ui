import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Admin, Playground as ReactBricksPlayground } from 'react-bricks'

const Playground = (_: RouteComponentProps) => {
  return (
    <Admin>
      <ReactBricksPlayground />
    </Admin>
  )
}

export default Playground
