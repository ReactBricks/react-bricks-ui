import classNames from 'classnames'
import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section from '../layout/Section'

export interface FaqProps {
  bg?: { color: string; className: string }
  width?: Size
}

const Faq: types.Brick<FaqProps> = ({
  bg = bgColors.WHITE.value,
  width = 'sm',
}) => {
  return (
    <Section bg={bg}>
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
    bg: bgColors.WHITE.value,
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
      props: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
    },
  ],
}

export default Faq
