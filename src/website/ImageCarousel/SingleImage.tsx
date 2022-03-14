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
        maxWidth={300}
        aspectRatio={2}
        imageClassName="rounded-2xl block object-contain w-full h-80 transition-all duration-300"
      />
    </div>
  )
}

SingleImage.schema = {
  name: blockNames.SingleImage,
  label: 'SingleImage',
  // category: '',
  // tags: [],

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default SingleImage
