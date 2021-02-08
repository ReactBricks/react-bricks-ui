import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks'
import Editor from 'react-simple-code-editor'
import * as prism from 'prismjs'

import 'prism-theme-night-owl'
import PrismCode from './PrismCode'
import Container from '../layout/Container'
import blockNames from '../blockNames'

export interface CodeBlockProps {
  language: string
}

const CodeBlock: types.Brick<CodeBlockProps> = ({ language }) => {
  const [value, onChange, isReadOnly] = useVisualEdit('code')

  if (isReadOnly) {
    return <PrismCode code={value} language="js" plugins={['line-numbers']} />
  }

  return (
    <Container>
      <pre className={`language-${language}`}>
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
          { value: 'javascript', label: 'Javascript' },
          { value: 'css', label: 'CSS' },
          { value: 'typescript', label: 'Typescript' },
          { value: 'bash', label: 'Bash' },
          { value: 'jsx', label: 'ReactJSX' },
          { value: 'tsx', label: 'ReactTSX' },
        ],
      },
    },
  ],
}

export default CodeBlock
