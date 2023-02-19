import * as React from 'react'
import { useState } from 'react'
import { Router, Link, navigate } from '@reach/router'
import classNames from 'classnames'
import * as dotenv from 'dotenv'

import { ReactBricks, types } from 'react-bricks/frontend'
import bricks from 'react-bricks-ui'

import Login from './Login'
import Editor from './Editor'
import Playground from './Playground'

dotenv.config()

// import AppSettings from './AppSettings'
// import Viewer from './Viewer'

import './style.css'

const App = () => {
  const colorModeLs = localStorage.getItem('color-mode')
  const [colorMode, setColorMode] = useState(colorModeLs || 'light')
  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light'
    setColorMode(newColorMode)
    localStorage.setItem('color-mode', newColorMode)
  }
  // const appId = process.env.APP_ID || ''
  const appId = '94c386c7-bde1-49b6-a619-491e3a380702'
  // const apiKey = process.env.API_KEY || ''
  const apiKey = '51913450-614b-48e4-9f59-6ce79db58981'

  return (
    <ReactBricks
      blockIconsPosition={types.BlockIconsPosition.OutsideBlock}
      appId={appId}
      apiKey={apiKey}
      bricks={bricks}
      enablePreviewImage
      enablePreviewIcon
      pageTypes={[
        {
          name: 'page',
          pluralName: 'page',
        },
      ]}
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
        <Playground path="/playground" />
      </Router>
    </ReactBricks>
  )
}

export default App
