import React from 'react'
import { Link, RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const Paragraph: types.Brick = () => {
  return (
    <Section>
      <Container>
        <RichText
          propName="text"
          placeholder="Paragraph..."
          renderBlock={({ children }) => (
            <p className="text-lg leading-relaxed mb-2 text-gray-700 dark:text-gray-200">
              {children}
            </p>
          )}
          allowedFeatures={[
            types.RichTextFeatures.Heading2,
            types.RichTextFeatures.Heading3,
            types.RichTextFeatures.Heading4,
            types.RichTextFeatures.Bold,
            types.RichTextFeatures.Italic,
            types.RichTextFeatures.Link,
            types.RichTextFeatures.Code,
            types.RichTextFeatures.Highlight,
            types.RichTextFeatures.UnorderedList,
            types.RichTextFeatures.OrderedList,
          ]}
          renderH2={({ children }) => {
            return (
              <h2 className="font-content text-4xl font-black text-gray-700 dark:text-gray-100 mb-3 pt-10">
                {children}
              </h2>
            )
          }}
          renderH3={({ children }) => {
            return (
              <h3 className="font-content text-3xl font-black text-gray-700 dark:text-gray-100 mb-3 pt-8">
                {children}
              </h3>
            )
          }}
          renderH4={({ children }) => {
            return (
              <h3 className="font-content text-2xl font-black text-gray-700 dark:text-gray-100 mb-3 pt-8">
                {children}
              </h3>
            )
          }}
          renderUL={({ children }) => (
            <ul className="list-disc list-outside ml-5 mt-4 text-lg">
              {children}
            </ul>
          )}
          renderOL={({ children }) => (
            <ol className="list-decimal list-outside ml-5 mt-4 text-lg">
              {children}
            </ol>
          )}
          renderLink={({ children, href }) => (
            <Link href={href} className="text-blue-400">
              {children}
            </Link>
          )}
        />
      </Container>
    </Section>
  )
}

Paragraph.schema = {
  name: blockNames.Paragraph,
  label: 'Paragraph',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Paragraph/Paragraph.tsx',
  getDefaultProps: () => ({
    text: [
      {
        type: 'h2',
        children: [
          {
            text: 'Lorem ipsum dolor sit title',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc placerat sagittis faucibus.',
          },
        ],
      },
    ],
  }),
}

export default Paragraph
