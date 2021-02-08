import * as React from 'react'
import * as prism from 'prismjs'

interface PrismCodeProps {
  code: string
  plugins: string[]
  language: string
}

const PrismCode: React.FC<PrismCodeProps> = ({ code, plugins, language }) => {
  const codeRef = React.useRef(null)

  const highlight = () => {
    if (codeRef && codeRef.current) {
      prism.highlightElement(codeRef.current!)
    }
  }

  React.useEffect(() => {
    console.log('highlight')
    highlight()
  }, [])

  return (
    <pre className={!plugins ? '' : plugins.join(' ')}>
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  )
}

export default PrismCode
