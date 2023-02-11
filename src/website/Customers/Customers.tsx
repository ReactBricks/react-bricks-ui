import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface CustomersProps {
  backgroundColor?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  width?: Size
  grayscale?: boolean
  customers: any
}

const Customers: types.Brick<CustomersProps> = ({
  backgroundColor,
  grayscale,
  customers,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container>
        <div
          className={classNames(
            'flex flex-wrap justify-center items-center -mx-4 md:-mx-5 -my-4',
            {
              'md:justify-between':
                customers.length >= 4 && customers.length <= 5,
            }
          )}
        >
          <Repeater propName="customers" itemProps={{ grayscale }} />
        </div>
      </Container>
    </Section>
  )
}

Customers.schema = {
  name: blockNames.Customers,
  label: 'Customers',
  category: 'logo grid',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/Customers.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    paddingTop: 'small',
    paddingBottom: 'small',
    borderTop: 'none',
    borderBottom: 'none',
    grayscale: true,
    customers: [
      {
        image: {
          src: 'https://images.reactbricks.com/original/93ed8ddd-a8cd-40dc-a4dd-d954ea568cad.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/93ed8ddd-a8cd-40dc-a4dd-d954ea568cad.svg',
          srcSet: '',
          alt: 'Woosmap',
          seoName: 'woosmap',
          width: 997.334,
          height: 198.205,
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/6278b20a-e04d-4e0e-b2dd-d8e27228c069.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/6278b20a-e04d-4e0e-b2dd-d8e27228c069.svg',
          srcSet: '',
          alt: 'Capbase',
          seoName: 'capbase',
          width: 1000,
          height: 300,
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/b6895334-198a-43d9-aa53-f27b7ff75f53.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/b6895334-198a-43d9-aa53-f27b7ff75f53.svg',
          srcSet: '',
          alt: 'Casavo',
          seoName: 'casavo',
          width: 520.76,
          height: 135.83,
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/9124b82c-686e-4de5-bd14-291d2fce37b8.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/9124b82c-686e-4de5-bd14-291d2fce37b8.svg',
          srcSet: '',
          alt: 'Everfund',
          seoName: 'everfund',
          width: 2698.39,
          height: 585.2,
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/e39a61c5-0a25-49bd-9f77-3d29fb43e5af.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/e39a61c5-0a25-49bd-9f77-3d29fb43e5af.svg',
          srcSet: '',
          alt: 'Neoskop',
          seoName: 'neoskop',
          width: 145,
          height: 40,
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'customers',
      itemType: blockNames.Customer,
      itemLabel: 'Customer',
      // addItemText: 'Add customer',
      // removeItemText: 'Remove customer',
      min: 0,
      max: 12,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [backgroundColorsEditProps, ...sectionPaddingsEditProps],
    },
    {
      groupName: 'Logos',
      defaultOpen: true,
      props: [
        {
          name: 'grayscale',
          label: 'Greyscale',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}

export default Customers
