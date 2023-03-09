import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'

const TextMediaLogo: types.Brick = () => {
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

TextMediaLogo.schema = {
  name: blockNames.TextMediaLogo,
  label: 'Logo',
  category: 'main content',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/TextImage/TextMediaLogo.tsx',

  //getDefaultProps: () => ({}),
}

export default TextMediaLogo
