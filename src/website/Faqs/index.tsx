import * as React from 'react'
import classNames from 'classnames'

import { Repeater, Plain, types } from 'react-bricks'
import blockNames from '../blockNames'

import { bgColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'

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
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'full',
    borderBottom: 'none',
    width: 'sm',
    faqs: [
      {
        question: Plain.deserialize('Why you should change your CMS today?'),
        answer: Plain.deserialize(
          'Because you want to have top user experience and top developer experience.'
        ),
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
      props: [
        {
          name: 'bg',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [bgColors.white, bgColors.light, bgColors.gray],
          },
        },
        {
          name: 'borderTop',
          label: 'Border Top',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'borderBottom',
          label: 'Border Bottom',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'width',
          label: 'Width',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'sm', label: 'Small' },
              { value: 'md', label: 'Medium' },
              { value: 'lg', label: 'Large' },
            ],
          },
        },
      ],
    },
  ],
}

export default Faq
