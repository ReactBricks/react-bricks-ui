import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import Container from '../layout/Container'
import blockNames from '../blockNames'
import { bgColors } from '../../website/colors'
import Section from '../layout/Section'

interface ImageBrickProps {
  bg?: { color: string; className: string }
}

const ImageBrick: types.Brick<ImageBrickProps> = ({
  bg = bgColors.white.value,
}) => {
  return (
    <Section bg={bg}>
      <Container>
        <Image propName="fullImage" alt="" />
      </Container>
    </Section>
  )
}
ImageBrick.schema = {
  name: blockNames.ImageBrick,
  label: 'Image',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/ImageBrick/index.tsx',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    fullImage: {
      src:
        'https://images.reactbricks.com/original/ba31648e-fac4-4ea1-bfd3-caa6ccd7282c.jpeg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/ba31648e-fac4-4ea1-bfd3-caa6ccd7282c.jpeg',
      srcSet:
        'https://images.reactbricks.com/src_set/ba31648e-fac4-4ea1-bfd3-caa6ccd7282c-400.jpeg 400w,\nhttps://images.reactbricks.com/src_set/ba31648e-fac4-4ea1-bfd3-caa6ccd7282c-200.jpeg 200w',
    },
  }),
}
export default ImageBrick
