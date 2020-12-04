import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Admin, Editor as ReactBricksEditor } from 'react-bricks'

const Editor = (_: RouteComponentProps) => {
  return (
    <Admin>
      <ReactBricksEditor />
    </Admin>
  )
}

export default Editor
