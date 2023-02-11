import classNames from 'classnames'
import * as React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

export interface CustomerProps {
  grayscale?: boolean
}

const Customer: types.Brick<CustomerProps> = ({ grayscale = true }) => {
  return (
    <div className="inline-flex items-center px-4 py-4 md:px-5">
      <Image
        propName="image"
        alt="customer"
        imageClassName={classNames(
          'block object-contain w-[80px] h-[20px] md:w-[96px] md:h-[24px] lg:w-[116px] lg:h-[29px]',
          {
            'opacity-50 grayscale dark:invert': grayscale,
          }
        )}
      />
    </div>
  )
}

Customer.schema = {
  name: blockNames.Customer,
  label: 'Customer',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/CustomerItem.tsx',

  getDefaultProps: () => ({
    image: {
      src: 'https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/7fd7ef1a-928f-45d6-b7a7-ff34bf91c15e.svg',
      srcSet: '',
      alt: 'React Bricks',
      seoName: 'react-bricks',
      width: 1700.787,
      height: 377.953,
    },
  }),
}

export default Customer
