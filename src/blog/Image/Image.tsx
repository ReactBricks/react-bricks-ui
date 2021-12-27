import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section, { SectionProps } from '../layout/Section'

const BlogImage: types.Brick<SectionProps> = ({
  bg = bgColors.white.value,
}) => {
  return (
    <Section bg={bg}>
      <Container>
        <Image propName="image" alt="" />
      </Container>
    </Section>
  )
}
BlogImage.schema = {
  name: blockNames.BlogImage,
  label: 'Image',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/ImageBrick/index.tsx',
  getDefaultProps: () => ({}),
}
export default BlogImage
