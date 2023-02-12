import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'

const TextImageLogo: types.Brick = () => {
  return (
    <div>
      <Image
        propName="imageSource"
        alt="logo"
        imageClassName="w-24 h-24 lg:w-24 lg:h-24"
        renderWrapper={({ children }) => (
          <div className="flex justify-center items-center">{children}</div>
        )}
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
      src: 'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      srcSet: '',
    },
  }),
}

export default TextImageLogo
