import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'

export interface CustomersProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  width?: Size
  grayscale?: boolean
}

const Customers: types.Brick<CustomersProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
  grayscale = true,
}) => {
  return (
    <Section bg={bg}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater propName="customers" itemProps={{ grayscale }} />
      </Container>
    </Section>
  )
}

Customers.schema = {
  name: blockNames.Customers,
  label: 'Customers',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/Customers.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#f7fafc',
      className: 'bg-gray-100 dark:bg-gray-800',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    grayscale: true,
    customers: [
      {
        image: {
          src: 'https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/55a585f2-0092-499a-88e7-6f6e72870382.svg',
          srcSet: '',
          alt: 'Airbnb',
          seoName: 'airbnb',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/df0214c6-7feb-4037-921f-985bdf584ed7.svg',
          srcSet: '',
          alt: 'Dribble',
          seoName: 'dribble',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/44dd50bd-9401-47bb-a248-56192cb0da03.svg',
          srcSet: '',
          alt: 'Netflix',
          seoName: 'netflix',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/5bea2f55-07ea-47fb-b638-bedaa6c2275f.svg',
          srcSet: '',
          alt: 'Pinterest',
          seoName: 'pinterest',
        },
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/52f81cf1-01bc-43d0-9428-995351146c2a.svg',
          srcSet: '',
          alt: 'Next.js',
          seoName: 'next-js',
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
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
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
