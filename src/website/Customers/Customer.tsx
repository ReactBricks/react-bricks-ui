import * as React from 'react'
import { Image, types } from 'react-bricks'
import blockNames from '../blockNames'

export interface CustomerProps {
  grayscale?: boolean
}

const Customer: types.Brick<CustomerProps> = ({
  grayscale = true,
  ...rest
}) => {
  return (
    <div
      className="px-6 py-4 w-1/2 sm:w-1/3 md:w-1/6 flex justify-center items-center text-gray-300"
      {...rest}
    >
      <Image
        propName="image"
        alt="customer"
        imageClassName="w-32 h-10"
        imageStyle={grayscale ? { filter: 'opacity(0.5) grayscale(100%)' } : {}}
      />
    </div>
  )
}

Customer.schema = {
  name: blockNames.Customer,
  label: 'Customer',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    image: {
      src:
        'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
      srcSet: '',
    },
  }),
}

export default Customer
