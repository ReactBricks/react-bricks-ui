import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import { Admin, Login as ReactBricksLogin } from 'react-bricks'

const Login = (_: RouteComponentProps) => {
  return (
    <Admin isLogin>
      <ReactBricksLogin />
    </Admin>
  )
}

export default Login
