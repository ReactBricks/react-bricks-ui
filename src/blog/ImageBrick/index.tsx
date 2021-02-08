import React from 'react'
import { Image, types } from 'react-bricks'
import Container from '../layout/Container'
import blockNames from '../blockNames'

const ImageBrick: types.Brick = () => {
  return (
    <Container className="mt-8">
      <Image propName="fullImage" alt="" />
    </Container>
  )
}
ImageBrick.schema = {
  name: blockNames.ImageBrick,
  label: 'Image',
  getDefaultProps: () => ({
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
