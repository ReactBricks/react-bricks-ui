import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../shared/components/Container'
import Section from '../shared/components/Section'

export interface FaqProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const Faq: types.Brick<FaqProps> = ({ backgroundColor, width }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width} className="flex flex-col space-y-12">
        <Repeater propName="faqs" />
      </Container>
    </Section>
  )
}

Faq.schema = {
  name: blockNames.Faqs,
  label: 'Faq',
  category: 'faq',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'full',
    borderBottom: 'none',
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
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        backgroundColorsEditProps,
        containerSizeEditProps,
        ...sectionBordersEditProps,
      ],
    },
  ],
}

export default Faq
