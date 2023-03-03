import * as Prism from 'prismjs'
import * as React from 'react'
import { types, useVisualEdit } from 'react-bricks/frontend'
import Editor from './SimpleCodeEditor'
import blockNames from '../../blockNames'
import Container from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import PrismCode from './PrismCode'
import Styles from './Styles'

require('prismjs/components/prism-typescript')
require('prismjs/components/prism-bash')
require('prismjs/components/prism-jsx')
require('prismjs/components/prism-tsx')
require('prismjs/plugins/line-numbers/prism-line-numbers.js')
require('prismjs/plugins/show-language/prism-show-language.js')
require('prismjs/plugins/line-highlight/prism-line-highlight.js')

export interface CodeProps {
  language: string
  dataline?: string
  showLineNumbers: boolean
}

const Code: types.Brick<CodeProps> = ({
  language = 'javascript',
  dataline = '',
  showLineNumbers = false,
}) => {
  const [hasMount, setHasMount] = React.useState(false)
  React.useEffect(() => {
    setHasMount(true)
  }, [])

  const [value, onChange, isReadOnly] = useVisualEdit('code')
  const plugins = []
  if (showLineNumbers) {
    plugins.push('line-numbers')
  }
  if (dataline !== '') {
    plugins.push('line-highlight')
  }

  if (!hasMount) {
    return null
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
          background: rgba(255,255,255,0.4);
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
      `}</style>
      <Container>
        <pre className={`rounded-lg language-${language}`}>
          <code className={`language-${language}`}>
            <Editor
              value={value}
              onValueChange={onChange}
              highlight={(code: any) => {
                return Prism.highlight(
                  code || '',
                  Prism.languages[language],
                  `${language}`
                )
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

Code.schema = {
  name: blockNames.Code,
  label: 'Code',
  category: 'single column / blog',
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
          Highlighted lines and line numbers are visible only in preview mode
          and in the frontend site.
        </div>
      ),
    },
  ],
}

export default Code
