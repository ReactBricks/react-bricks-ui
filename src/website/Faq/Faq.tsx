import * as React from 'react'
import classNames from 'classnames'

import { Repeater, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'

import { bgColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import { LayoutProp } from '../LayoutSideProps'

export interface FaqProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  width?: Size
}

const Faq: types.Brick<FaqProps> = ({
  bg = bgColors.white.value,
  borderTop = 'full',
  borderBottom = 'none',
  width = 'sm',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
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
    bg: bgColors.white.value,
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
    LayoutProp({ colors: [bgColors.white, bgColors.light, bgColors.gray] }),
  ],
}

export default Faq
