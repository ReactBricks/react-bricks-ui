import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface Props {}

const SingleImage: types.Brick<Props> = ({ ...rest }) => {
  return (
    <div {...rest} className="flex justify-center">
      <Image
        noWrapper
        propName="image"
        alt="altText"
        maxWidth={1200}
        aspectRatio={2}
        imageClassName="object-cover object-center transition-all duration-300"
      />
    </div>
  )
}

SingleImage.schema = {
  name: blockNames.SingleImage,
  label: 'SingleImage',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: {
      src: 'https://images.reactbricks.com/original/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/8309ea05-d105-4f50-9d54-ba86ebddcfbe.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-2400.jpg 2400w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1800.jpg 1800w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-1200.jpg 1200w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-600.jpg 600w,\nhttps://images.reactbricks.com/src_set/8309ea05-d105-4f50-9d54-ba86ebddcfbe-300.jpg 300w',
      width: 3385,
      height: 1693,
      alt: 'altText',
      seoName: '',
    },
  }),
}

export default SingleImage
