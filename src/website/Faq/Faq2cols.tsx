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
import Container, { Size } from '../shared/layout/Container'
import Section from '../shared/layout/Section'

export interface FaqProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const Faq2cols: types.Brick<FaqProps> = ({ backgroundColor, width }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width} className="grid sm:grid-cols-2 gap-12">
        <Repeater propName="faqs" />
      </Container>
    </Section>
  )
}

Faq2cols.schema = {
  name: blockNames.Faqs2cols,
  label: 'Faq 2 cols',
  category: 'faq',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'full',
    borderBottom: 'none',
    width: 'medium',
    faqs: [
      {
        question: 'Why you should change your CMS today?',
        answer:
          'Because you care about your content creators and you are looking for a top developer experience, with a future-proof solution.',
      },
      {
        question: 'Can I create an e-commerce with React Bricks?',
        answer:
          "Sure! E-commerce solutions usually have a poor content management system for the product details page: let's change this with juicy visual editing!",
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

export default Faq2cols
