import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks'
import Editor from 'react-simple-code-editor'
import * as prism from 'prismjs'
require('prismjs/components/prism-typescript')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/plugins/line-numbers/prism-line-numbers.js')

import 'prism-theme-night-owl'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

import PrismCode from './PrismCode'
import Container from '../layout/Container'
import blockNames from '../blockNames'

export interface CodeBlockProps {
  language: string
}

const CodeBlock: types.Brick<CodeBlockProps> = ({
  language = 'javascript',
}) => {
  const [value, onChange, isReadOnly] = useVisualEdit('code')

  if (isReadOnly) {
    return (
      <Container>
        <PrismCode code={value} language="js" plugins={['line-numbers']} />
      </Container>
    )
  }

  return (
    <Container>
      <pre className={`rounded-lg line-numbers language-${language}`}>
        <code className={`language-${language}`}>
          <Editor
            value={value}
            onValueChange={onChange}
            highlight={code =>
              prism.highlight(code, prism.languages[language], language)
            }
            padding={10}
          />
        </code>
      </pre>
    </Container>
  )
}

CodeBlock.schema = {
  name: blockNames.CodeBlock,
  label: 'Code Block',
  getDefaultProps: () => ({
    code: 'let a = 1',
    language: 'javascript',
  }),
  sideEditProps: [
    {
      name: 'language',
      label: 'Language',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'javascript', label: 'JavaScript' },
          { value: 'css', label: 'CSS' },
          { value: 'typescript', label: 'TypeScript' },
          { value: 'bash', label: 'Bash' },
          { value: 'jsx', label: 'JSX' },
          { value: 'tsx', label: 'TSX' },
        ],
      },
    },
    // With Line Numbers
    // Show Code
  ],
}

export default CodeBlock
