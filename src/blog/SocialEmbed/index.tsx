import * as React from 'react'
import { useEffect, useRef, useState, useContext } from 'react'
import { types, ReactBricksContext } from 'react-bricks'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'

import Container from '../layout/Container'
import Section from '../layout/Section'

export interface SocialEmbedProps {
  id: string
  placeholder: string
  align: string
  cards: string
  conversation: string
  theme: string
  bg: { color: string; className: string }
}

const SocialEmbed: types.Brick<SocialEmbedProps> = ({
  id,
  placeholder,
  align,
  cards,
  conversation,
  theme,
  bg = bgColors.white.value,
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
          console.log(id, widgets, {
            align,
            cards,
            conversation,
            theme,
          })
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
    <Section bg={bg}>
      <Container>
        <div ref={twitterEmbedRef}>{isLoading && placeholder}</div>
      </Container>
    </Section>
  )
}
SocialEmbed.schema = {
  name: blockNames.SocialEmbed,
  label: 'Twitter Embed',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/SocialEmbed/index.tsx',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
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
      name: 'id',
      label: 'Tweet ID',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'placeholder',
      label: 'Loading Placeholder',
      type: types.SideEditPropType.Text,
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
  ],
}
export default SocialEmbed
