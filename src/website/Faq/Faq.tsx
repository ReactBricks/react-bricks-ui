import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import blockNames from '../blockNames'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

export interface FaqProps extends LayoutProps {}

const Faq: types.Brick<FaqProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="flex flex-col space-y-12"
      >
        <Repeater propName="faqs" />
      </Container>
    </Section>
  )
}

Faq.schema = {
  name: blockNames.Faqs,
  label: 'Faq',
  category: 'faq',
  tags: ['frequently asked questions', 'faq'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'full',
    width: 'small',
    faqs: [
      {
        question: 'Why you should change your CMS today?',
        answer:
          'Because you care about your content creators and you are looking for a top developer experience, with a future-proof solution.',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'faqs',
      itemType: blockNames.Faq,
      itemLabel: 'Question',
    },
  ],
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default Faq
