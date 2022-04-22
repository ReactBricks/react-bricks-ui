import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const Quote: types.Brick = () => {
  return (
    <Section>
      <Container>
        <div className="text-2xl my-8 pl-6 py-1 border-l-4 border-pink-500 dark:border-pink-400">
          <RichText
            propName="quote"
            placeholder="Insert a quote"
            renderBlock={({ children }) => (
              <p className="text-2xl italic text-gray-500 dark:text-gray-200">
                {children}
              </p>
            )}
          />
        </div>
      </Container>
    </Section>
  )
}

Quote.schema = {
  name: blockNames.Quote,
  label: 'Quote',
  category: 'rb-ui blog',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Quote/Quote.tsx',
  getDefaultProps: () => ({
    quote: 'Innovation distinguishes between a leader and a follower.',
  }),
}

export default Quote
