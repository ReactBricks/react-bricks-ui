import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'
import blockNames from '../blockNames'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import { pricingColors } from '../colors'

interface PricingProps extends LayoutProps {}

const Pricing: types.Brick<PricingProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="medium"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
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
    ...sectionDefaults,
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
        pricingColor: pricingColors.PINK.value,
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
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Pricing
