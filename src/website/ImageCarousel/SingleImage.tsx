import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'

interface Props {}

const SingleImage: types.Brick<Props> = ({ ...rest }) => {
  return (
    <div {...rest} className="rest">
      <Image
        noWrapper
        propName="image"
        alt="altText"
        maxWidth={1200}
        aspectRatio={2}
        imageClassName="object-cover object-center w-full max-h-96 transition-all duration-300"
      />
    </div>
  )
}

SingleImage.schema = {
  name: blockNames.SingleImage,
  label: 'SingleImage',
  sideEditProps: [],
}

export default SingleImage
