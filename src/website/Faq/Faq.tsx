import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../shared/layout/Container'
import Section from '../shared/layout/Section'

export interface FaqProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
}

const Faq: types.Brick<FaqProps> = ({
  backgroundColor = bgColors.WHITE.value,
  width = 'small',
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width} className={classNames('pt-12')}>
        <Repeater propName="faqs" />
      </Container>
    </Section>
  )
}

Faq.schema = {
  name: blockNames.Faqs,
  label: 'Faq',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/Faq.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'full',
    borderBottom: 'none',
    width: 'sm',
    faqs: [
      {
        question: 'Why you should change your CMS today?',
        answer:
          'Because you want to have top user experience and top developer experience.',
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
      props: [backgroundColorsEditProps, containerSizeEditProps],
    },
  ],
}

export default Faq
