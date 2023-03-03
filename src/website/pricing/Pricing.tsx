import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container, { Size } from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'

import blockNames from 'website/blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
} from 'website/LayoutSideProps'

interface PricingProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const Pricing: types.Brick<PricingProps> = ({ backgroundColor, width }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width}>
        <div className="flex flex-1 grow flex-wrap justify-center lg:flex-nowrap">
          <Repeater propName="plans" />
        </div>
      </Container>
    </Section>
  )
}

Pricing.schema = {
  name: blockNames.Pricing,
  label: '3 business plan',
  category: 'rb-ui website',
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: 'plan-brick',
      itemType: blockNames.PricingPlan,
      itemLabel: 'Plan',
      min: 1,
      max: 3,
    },
  ],
  sideEditProps: [
    {
      groupName: 'layout',
      props: [backgroundColorsEditProps, containerSizeEditProps],
    },
  ],
}

export default Pricing
