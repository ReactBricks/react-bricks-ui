import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'

const SingleImage: types.Brick = () => {
  return (
    <Section>
      <Container>
        <Image propName="image" alt="Image" />
      </Container>
    </Section>
  )
}

SingleImage.schema = {
  name: blockNames.SingleImage,
  label: 'Image',
  category: 'rb-ui blog',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Image/Image.tsx',
  getDefaultProps: () => ({
    image: {
      src: 'https://images.reactbricks.com/original/d80c1861-7647-408a-8d29-619c110a808b.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/d80c1861-7647-408a-8d29-619c110a808b.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-1600.jpg 1600w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-800.jpg 800w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/d80c1861-7647-408a-8d29-619c110a808b-200.jpg 200w',
      width: 3385,
      height: 1902,
      alt: '',
      seoName: '',
    },
  }),
}

export default SingleImage
