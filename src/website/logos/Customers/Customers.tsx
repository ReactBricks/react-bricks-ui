import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
} from '../../LayoutSideProps'
import { customers } from '../../shared/defaultImages'
import blockNames from '../../blockNames'
import { bgColors } from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'

export interface CustomersProps extends LayoutProps {
  grayscale?: boolean
  customers: any
}

const Customers: types.Brick<CustomersProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  grayscale,
  customers,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container paddingTop={paddingTop} paddingBottom={paddingBottom}>
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
  tags: ['customers', 'logos', 'logo cloud'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Customers/Customers.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    paddingTop: '12',
    paddingBottom: '12',
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
      min: 0,
      max: 12,
    },
  ],
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
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
