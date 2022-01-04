import * as React from 'react'
import { Image, ReactBricksContext, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

export interface CustomerProps {
  grayscale?: boolean
}

const Customer: types.Brick<CustomerProps> = ({
  grayscale = true,
  ...rest
}) => {
  const { isDarkColorMode } = React.useContext(ReactBricksContext)
  return (
    <div
      className="px-6 py-4 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center text-gray-300"
      {...rest}
    >
      <Image
        propName="image"
        alt="customer"
        imageClassName="w-32 h-16"
        imageStyle={
          grayscale
            ? isDarkColorMode
              ? { filter: 'opacity(0.5) grayscale(100%) invert(1)' } //grayscale and darkmode
              : { filter: 'opacity(0.5) grayscale(100%)' } //only grayscale
            : {}
        }
      />
    </div>
  )
}

Customer.schema = {
  name: blockNames.Customer,
  label: 'Customer',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: {
      src:
        'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/3c4b1f31-16ec-417f-ab2d-d734632bdeb8.svg',
      srcSet: '',
      alt: 'React Bricks Icon',
      seoName: 'react-bricks-icon',
    },
  }),
}

export default Customer
