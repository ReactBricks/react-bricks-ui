import 'react-app-polyfill/ie11'
import * as React from 'react'
import { render } from 'react-dom'
import * as ReactDOM from '../node_modules/react-dom/client'
import App from './App'

const container = document.getElementById('root')

const root = ReactDOM.createRoot(container)

root.render(<App />)