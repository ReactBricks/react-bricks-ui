import Prism from 'prismjs'
import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks/frontend'
import Editor from 'react-simple-code-editor'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'
import PrismCode from './PrismCode'
import Styles from './Styles'

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/plugins/line-numbers/prism-line-numbers.js')
require('prismjs/plugins/show-language/prism-show-language.js')
require('prismjs/plugins/line-highlight/prism-line-highlight.js')

export interface CodeBrickProps {
  language: string
  dataline?: string
  showLineNumbers: boolean
}

const CodeBrick: types.Brick<CodeBrickProps> = ({
  language = 'javascript',
  dataline = '',
  showLineNumbers = false,
}) => {
  const [value, onChange, isReadOnly] = useVisualEdit('code')
  const plugins = []
  if (showLineNumbers) {
    plugins.push('line-numbers')
  }
  if (dataline !== '') {
    plugins.push('line-highlight')
  }

  if (isReadOnly) {
    return (
      <Section>
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
    <Section>
      <Styles />
      <style>{`
        .dark pre {
          background-color: #1f2937;
        }
        
        .editor-line-number {
          counter-reset: line;
        }
        
        .editor-line-number #codeArea {
          outline: none;
          padding-left: 40px !important;
        }
        
        .editor-line-number pre {
          padding-left: 40px !important;
        }
        
        .editor-line-number .row-line-number {
          position: absolute;
          left: 0px;
          color: #999;
          text-align: right;
          width: 20px;
          font-weight: 100;
        }
      `}</style>
      <Container>
        <pre className={`rounded-lg language-${language}`}>
          <code className={`language-${language}`}>
            <Editor
              value={value}
              onValueChange={onChange}
              highlight={(code) => {
                return Prism.highlight(
                  code || '',
                  Prism.languages[language],
                  `${language}`
                )
                  .split('\n')
                  .map((line, i) =>
                    showLineNumbers
                      ? `<span class='row-line-number'>${i + 1}</span>${line}`
                      : line
                  )
                  .join('\n')
              }}
              padding={10}
              textareaId="codeArea"
              className={showLineNumbers ? 'editor-line-number' : ''}
            />
          </code>
        </pre>
      </Container>
    </Section>
  )
}

CodeBrick.schema = {
  name: blockNames.CodeBlock,
  label: 'Code',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Code/Code.tsx',
  getDefaultProps: () => ({
    code: "import React from 'react'\nconsole.log('hello')\nconst a = 2\nlet b = 3",
    language: 'typescript',
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
    {
      name: 'helper',
      label: 'Warning',
      type: types.SideEditPropType.Custom,
      component: () => (
        <div className="text-sm">
          The highlighted lines are visible only in preview mode and in the
          frontend site.
        </div>
      ),
    },

    // With Line Numbers
    // Show Code
  ],
}

export default CodeBrick
