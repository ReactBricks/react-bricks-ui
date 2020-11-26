import * as React from 'react'
import classNames from 'classnames'

import { Repeater, types } from 'react-bricks'
import blockNames from '../blockNames'

import { bgColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'

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
  borderTop = 'none',
  borderBottom = 'none',
  width = 'lg',
  grayscale = true,
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
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
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    grayscale: true,
    customers: [
      {
        image: {
          src:
            'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/027efa10-a736-11ea-92c8-1984ec6322b2.svg',
          srcSet: '',
          alt: 'React',
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
      name: 'bg',
      label: 'Background',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [bgColors.white, bgColors.light, bgColors.gray],
      },
    },
    {
      name: 'borderTop',
      label: 'Border Top',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'full', label: 'Full-width' },
          { value: 'boxed', label: 'Boxed' },
        ],
      },
    },
    {
      name: 'borderBottom',
      label: 'Border Bottom',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'none', label: 'None' },
          { value: 'full', label: 'Full-width' },
          { value: 'boxed', label: 'Boxed' },
        ],
      },
    },
    {
      name: 'width',
      label: 'Width',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
    },
    {
      name: 'grayscale',
      label: 'Greyscale',
      type: types.SideEditPropType.Boolean,
    },
  ],
}

export default Customers
