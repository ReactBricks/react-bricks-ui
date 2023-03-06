import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container, { Size } from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import blockNames from 'website/blockNames'
import {
  containerSizeEditProps,
  neutralBackgroundColorsEditProps,
} from 'website/LayoutSideProps'
import { pricingColors } from 'website/colors'

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
  tags: ['pricing', 'plans', 'price'],
  getDefaultProps: () => ({
    plans: [
      {
        popularTagText: 'Most popular',
        withPopularTag: false,
        pricingColor: pricingColors.CYAN.value,
        planName: 'Entry',
        planDescription: 'For startups and teams starting using React Bricks.',
        planPrice: '$ 99',
        planConditions: 'per app / month',
        buttonText: 'Get started',
        buttonLinkPath: '/',
        featuresTitle: 'Everything in Community, plus:',
        features: [
          {
            featureText: '5 users included',
          },
          {
            featureText: 'Up to 100 pages',
          },
          {
            featureText: 'Media library',
            withTag: true,
            tag: 'Soon',
          },
        ],
      },
      {
        popularTagText: 'Most popular',
        withPopularTag: true,
        pricingColor: pricingColors.INDIGO.value,
        planName: 'Professional',
        planDescription: 'For companies needing to scale their content.',
        planPrice: '$ 429',
        planConditions: 'per app / month',
        buttonText: 'Get started',
        buttonLinkPath: '/',
        featuresTitle: 'Everything in Entry, plus:',
        features: [
          {
            featureText: '10 users included',
          },
          {
            featureText: 'Up to 300 pages',
          },
          {
            featureText: 'Visually create e-mails',
            withTag: true,
            tag: 'Add-on',
          },
        ],
      },
    ],
  }),
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
