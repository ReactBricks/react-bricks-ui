import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks'
import Editor from 'react-simple-code-editor'
import * as prism from 'prismjs'

import 'prism-theme-night-owl'
import PrismCode from './PrismCode'

const CodeBlock: types.Brick = () => {
  const [value, onChange, isReadOnly] = useVisualEdit('code')

  if (isReadOnly) {
    return <PrismCode code={value} language="js" plugins={['line-numbers']} />
  }

  return (
    <pre className="language-js">
      <code className="language-js">
        <Editor
          value={value}
          onValueChange={onChange}
          highlight={code =>
            prism.highlight(code, prism.languages.javascript, 'js')
          }
          padding={10}
        />
      </code>
    </pre>
  )
}

CodeBlock.schema = {
  name: 'code-block',
  label: 'Code Block',
  getDefaultProps: () => {
    return {
      code: 'let a = 1',
    }
  },
}

export default CodeBlock
