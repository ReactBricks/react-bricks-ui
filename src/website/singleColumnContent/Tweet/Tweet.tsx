import * as React from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import { types, ReactBricksContext } from 'react-bricks/frontend'
import { bgColors } from '../../colors'

import blockNames from '../../blockNames'

import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'

export interface TweetProps extends LayoutProps {
  id: string
  placeholder: string
  align: string
  cards: string
  conversation: string
  theme: string
}

const Tweet: types.Brick<TweetProps> = ({
  id,
  placeholder,
  align,
  cards,
  conversation,
  theme,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  const twitterEmbedRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState(true)
  const { isDarkColorMode } = useContext(ReactBricksContext)

  useEffect(() => {
    const isBlackTheme: boolean =
      theme === 'dark' || (theme === 'auto' && !!isDarkColorMode)
    const twTheme: string = isBlackTheme ? 'dark' : ''

    if (twitterEmbedRef?.current) {
      const currentDocument = twitterEmbedRef?.current.ownerDocument
      const currentWindow = twitterEmbedRef?.current.ownerDocument.defaultView

      var script = currentDocument.createElement('script')
      script.setAttribute('src', 'https://platform.twitter.com/widgets.js')
      script.onload = () => {
        // @ts-ignore
        const twttr = currentWindow!['twttr']
        twttr.ready().then(({ widgets }: any) => {
          // Clear previously rendered tweet before rendering the updated tweet id
          if (twitterEmbedRef.current) {
            twitterEmbedRef.current.innerHTML = ''
          }

          // const { options, onTweetLoadSuccess, onTweetLoadError } = props
          widgets
            .createTweetEmbed(id, twitterEmbedRef.current, {
              align,
              cards,
              conversation,
              theme: twTheme,
            })
            .then(() => {
              setIsLoading(false)
            })
        })
      }
      currentDocument.body.appendChild(script)
    }
  }, [
    isLoading,
    id,
    placeholder,
    align,
    cards,
    conversation,
    theme,
    isDarkColorMode,
  ])

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div ref={twitterEmbedRef}>{isLoading && placeholder}</div>
      </Container>
    </Section>
  )
}

Tweet.schema = {
  name: blockNames.Tweet,
  label: 'Tweet',
  category: 'single column / blog',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Tweet/Tweet.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    id: '1237840583982329857',
    placeholder: 'Loading Tweet',
    position: 'center',
    cards: 'hidden',
    conversation: 'none',
    theme: 'auto',
    align: 'center',
  }),
  sideEditProps: [
    {
      groupName: 'Tweet',
      defaultOpen: true,
      props: [
        {
          name: 'id',
          label: 'Tweet ID',
          type: types.SideEditPropType.Text,
        },
      ],
    },
    {
      groupName: 'Options',
      props: [
        {
          name: 'cards',
          label: 'Cards',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '', label: 'Show' },
              { value: 'hidden', label: 'Hidden' },
            ],
          },
        },
        {
          name: 'conversation',
          label: 'Conversation',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: '', label: 'Show' },
              { value: 'none', label: 'None' },
            ],
          },
        },
        {
          name: 'theme',
          label: 'Theme',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'auto', label: 'Automatic' },
              { value: 'light', label: 'Light' },
              { value: 'dark', label: 'Dark' },
            ],
          },
        },
        {
          name: 'align',
          label: 'Align',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'left', label: 'Left' },
              { value: 'center', label: 'Center' },
              { value: 'right', label: 'Right' },
            ],
          },
        },
        {
          name: 'placeholder',
          label: 'Loading Placeholder',
          type: types.SideEditPropType.Text,
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default Tweet
