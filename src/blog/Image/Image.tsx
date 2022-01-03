import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

const BlogImage: types.Brick = () => {
  return (
    <Section>
      <Container>
        <Image propName="image" aspectRatio={1.78} alt="" />
      </Container>
    </Section>
  )
}

BlogImage.schema = {
  name: blockNames.BlogImage,
  label: 'Image',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Image/Image.tsx',
  getDefaultProps: () => ({}),
}

export default BlogImage
