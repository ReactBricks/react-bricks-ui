import React from 'react'
import { types } from 'react-bricks'
import { Tweet } from 'react-twitter-widgets'

import blockNames from '../blockNames'
import Container from '../layout/Container'

export interface SocialEmbedProps {
  id: string
}

const SocialEmbed: types.Brick<SocialEmbedProps> = () => {
  console.log('twttr', (window as any).twttr.widgets.load())
  console.log('document', document as any)

  return (
    <Container>
      {/* <iframe
        width="600"
        height="350"
        className="mx-auto items-center"
        src="https://twitframe.com/show?url=https://twitter.com/matfrana/status/1237840583982329857"
      ></iframe> */}
      <Tweet tweetId="1237840583982329857" />
    </Container>
  )
}
SocialEmbed.schema = {
  name: blockNames.SocialEmbed,
  label: 'Twitter Embed',
  getDefaultProps: () => ({
    id: '1237840583982329857',
  }),
}
export default SocialEmbed
