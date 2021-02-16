import * as React from 'react'
import * as prism from 'prismjs'

interface PrismCodeProps {
  code: string
  plugins: string[]
  language: string
  dataLine?: string
}

const PrismCode: React.FC<PrismCodeProps> = ({
  code,
  plugins,
  language,
  dataLine,
}) => {
  const codeRef = React.useRef(null)

  const highlight = () => {
    if (codeRef && codeRef.current) {
      prism.highlightElement(codeRef.current!)
    }
  }

  React.useEffect(() => {
    console.log('highlight', dataLine)
    highlight()
  }, [])

  const dataLineObj = dataLine ? { 'data-line': dataLine } : {}

  return (
    <pre
      className={`rounded-lg ${!plugins ? '' : plugins.join(' ')}`}
      {...dataLineObj}
    >
      <code ref={codeRef} className={`language-${language}`}>
        {code.trim()}
      </code>
    </pre>
  )
}

export default PrismCode
