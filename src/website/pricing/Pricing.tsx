import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container, { Size } from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import blockNames from 'website/blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  neutralBackgroundColorsEditProps,
} from 'website/LayoutSideProps'

interface PricingProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const Pricing: types.Brick<PricingProps> = ({ backgroundColor, width }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width}>
        <div className={`flex flex-wrap justify-center`}>
          <Repeater propName="plans" />
        </div>
      </Container>
    </Section>
  )
}

Pricing.schema = {
  name: blockNames.Pricing,
  label: 'Pricing',
  category: 'pricing',
  getDefaultProps: () => ({}),
  repeaterItems: [
    {
      name: 'plans',
      itemType: blockNames.PricingPlan,
      itemLabel: 'Plan',
      min: 0,
      max: 6,
    },
  ],
  sideEditProps: [
    {
      groupName: 'layout',
      props: [neutralBackgroundColorsEditProps, containerSizeEditProps],
    },
  ],
}

export default Pricing
