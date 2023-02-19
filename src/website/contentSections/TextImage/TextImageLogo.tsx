import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import { iconLogos } from 'website/shared/defaultImages'
import blockNames from '../../blockNames'

const TextImageLogo: types.Brick = () => {
  return (
    <div>
      <Image
        propName="image"
        alt="logo"
        imageClassName="w-20 h-20 lg:w-24 lg:h-24"
        renderWrapper={({ children }) => (
          <div className="flex justify-center items-center p-4">{children}</div>
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
    //image: iconLogos.REACT_BRICKS,
  }),
}

export default TextImageLogo
