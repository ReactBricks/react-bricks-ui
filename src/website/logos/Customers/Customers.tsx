import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import { customers } from 'website/shared/defaultImages'
import blockNames from '../../blockNames'
import { bgColors } from '../../colors'
import Container, { Size } from '../../shared/layout/Container'
import Section, { Border } from '../../shared/layout/Section'

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
  category: 'logos',
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
        image: customers.WOOSMAP,
      },
      {
        image: customers.CAPBASE,
      },
      {
        image: customers.CASAVO,
      },
      {
        image: customers.EVERFUND,
      },
      {
        image: customers.NEOSKOP,
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
