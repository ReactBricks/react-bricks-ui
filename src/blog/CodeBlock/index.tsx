import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks'
import Editor from 'react-simple-code-editor'
import * as prism from 'prismjs'

import PrismCode from './PrismCode'
import Container from '../layout/Container'
import blockNames from '../blockNames'
import { bgColors } from '../../website/colors'
import Section from '../layout/Section'
import Styles from './Styles'

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/plugins/line-numbers/prism-line-numbers.js')
require('prismjs/plugins/show-language/prism-show-language.js')
require('prismjs/plugins/line-highlight/prism-line-highlight.js')
export interface CodeBlockProps {
  language: string
  dataline?: string
  showLineNumbers: boolean
  bg?: { color: string; className: string }
}

const CodeBlock: types.Brick<CodeBlockProps> = ({
  language = 'javascript',
  dataline = '',
  showLineNumbers = false,
  bg = bgColors.white.value,
}) => {
  const [value, onChange, isReadOnly] = useVisualEdit('code')

  const plugins = []
  if (showLineNumbers) {
    plugins.push('line-numbers')
  }
  if (dataline !== '') {
    plugins.push('line-highlight')
  }

  console.log(dataline)
  if (isReadOnly) {
    return (
      <Section bg={bg}>
        <Styles />
        <Container>
          <style>{`
        .dark pre {
          background-color: #1f2937;
        }
        .line-highlight {
          background: rgba(255,255,255,0.2);
        }
        .line-highlight:before {
          content: '';
        }
      `}</style>
          <PrismCode
            code={value}
            language={language}
            plugins={plugins}
            dataLine={dataline}
          />
        </Container>
      </Section>
    )
  }

  return (
    <Section bg={bg}>
      <Styles />
      <style>{`
        .dark pre {
          background-color: #1f2937;
        }
      `}</style>
      <Container>
        <pre className={`rounded-lg language-${language}`}>
          <code className={`language-${language}`}>
            <Editor
              value={value}
              onValueChange={onChange}
              highlight={code =>
                prism.highlight(code, prism.languages[language], `${language}`)
              }
              padding={10}
            />
          </code>
        </pre>
      </Container>
    </Section>
  )
}

CodeBlock.schema = {
  name: blockNames.CodeBlock,
  label: 'Code Block',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/CodeBlock/index.tsx',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    code:
      "import React from 'react'\nconsole.log('hello')\nconst a = 2\nlet b = 3",
    language: 'javascript',
    dataline: '',
    showLineNumbers: false,
  }),
  sideEditProps: [
    {
      name: 'language',
      label: 'Language',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
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
    {
      name: 'dataline',
      label: 'Highlight line (ex: 1,2,3): ',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'showLineNumbers',
      label: 'Show Line Numbers?',
      type: types.SideEditPropType.Boolean,
    },

    // With Line Numbers
    // Show Code
  ],
}

export default CodeBlock
