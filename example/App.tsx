import * as React from 'react'
import { useState } from 'react'
import { Router, Link, navigate } from '@reach/router'
import classNames from 'classnames'

import { ReactBricks } from 'react-bricks'
import { website } from '../dist'

import Login from './Login'
import Editor from './Editor'
// import Playground from './Playground'
// import AppSettings from './AppSettings'
// import Viewer from './Viewer'

import 'tailwindcss/tailwind.css'

const App = () => {
  const colorModeLs = localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(colorModeLs || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }

  return (
    <ReactBricks
      appId="94c386c7-bde1-49b6-a619-491e3a380702"
      apiKey="51913450-614b-48e4-9f59-6ce79db58981"
      // appId="a7992cf0-b516-4c2c-977a-699d391e7b5a"
      // apiKey="b503b3c5-d873-4e95-a86e-63194caf30e6"
      bricks={website}
      contentClassName={classNames(
        'font-content antialiased bg-white',
        colorMode,
        { 'dark-bg': colorMode === 'dark' }
      )}
      renderLocalLink={({ href, children, className, activeClassName }) => {
        const isActive = ({ isCurrent }) => {
          return isCurrent ? { className: activeClassName } : {}
        }

        return (
          <Link to={href} className={className} getProps={isActive}>
            {children}
          </Link>
        )
      }}
      navigate={navigate}
      loginPath="/"
      editorPath="/editor"
      playgroundPath="/playground"
      appSettingsPath="/app-settings"
      isDarkColorMode={colorMode === 'dark'}
      toggleColorMode={toggleColorMode}
      appRootElement="#root"
    >
      <Router>
        <Login path="/" />

        <Editor path="/editor" />
        {/* <Playground path="/playground" />
        <AppSettings path="/app-settings" />
        <Viewer path="/page/:slug" /> */}
      </Router>
    </ReactBricks>
  )
}

export default App
