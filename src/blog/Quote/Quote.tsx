import React from 'react'
import { RichText, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const Quote: types.Brick = () => {
  return (
    <Section>
      <Container>
        <div className="text-2xl my-8 pl-6 py-1 border-l-2 border-pink-500">
          <RichText
            propName="text"
            placeholder="Innovation distinguishes between a leader and a follower."
            renderBlock={({ children }) => (
              <p className="text-2xl text-gray-400 dark:text-gray-400">
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
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Quote/Quote.tsx',
  getDefaultProps: () => ({}),
}

export default Quote