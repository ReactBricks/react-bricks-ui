import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

const TextImageLogo: types.Brick = ({ ...rest }) => {
  return (
    <div {...rest}>
      <Image
        propName="imageSource"
        alt="logo"
        containerClassName="w-16 h-16 lg:w-24 lg:h-24 mx-3 mb-6 p-2 flex justify-center items-center bg-white rounded-full shadow-xl"
        imageClassName="w-12 h-12 lg:w-16 lg:h-16"
      />
    </div>
  )
}

TextImageLogo.schema = {
  name: blockNames.TextImageLogo,
  label: 'Logo',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextImageLogo.tsx',

  getDefaultProps: () => ({
    imageSource: {
      src:
        'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      srcSet: '',
    },
  }),
}

export default TextImageLogo
