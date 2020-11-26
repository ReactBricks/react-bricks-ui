import * as React from 'react'
import { Image, types } from 'react-bricks'
import blockNames from '../blockNames'

const TextImageLogo: types.Brick = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Image
        propName="imageSource"
        alt="logo"
        // containerClassName="w-12 h-12 lg:w-16 lg:h-16 mx-4 mb-8 bg-white rounded-full p-2 shadow-md flex justify-center items-center"
        // imageClassName="w-6 h-6 lg:w-10 lg:h-10"
        containerClassName="w-16 h-16 lg:w-24 lg:h-24 mx-3 mb-6 p-2 flex justify-center items-center bg-white rounded-full shadow-xl"
        imageClassName="w-12 h-12 lg:w-16 lg:h-16"
      />
    </div>
  )
}

TextImageLogo.schema = {
  name: blockNames.TextImageLogo,
  label: 'Logo',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    imageSource: {
      src:
        'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
      srcSet: '',
    },
  }),
}

export default TextImageLogo
