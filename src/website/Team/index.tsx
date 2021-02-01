import * as React from 'react'
import { Plain, Repeater, types } from 'react-bricks'

import classNames from 'classnames'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { bgColors } from '../colors'
import blockNames from '../blockNames'

export interface TeamProps {
  bg?: { color: string; className: string }
  width?: Size
  borderTop?: Border
  borderBottom?: Border
}

const Team: types.Brick<TeamProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
  borderTop = 'none',
  borderBottom = 'none',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <div className="flex w-full mx-auto mt-10 flex-wrap justify-center mb-6 w- max-w-4xl">
          <Repeater propName="teamItem" />
        </div>
      </Container>
    </Section>
  )
}
Team.schema = {
  name: blockNames.Team,
  label: 'Team',
  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    teamItem: [
      {
        memberName: Plain.deserialize('Matteo Frana'),
        duty: Plain.deserialize('Founder @ React Bricks'),
        picture: {
          src:
            'https://images.reactbricks.com/original/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/8a568f5b-98e4-46d5-96eb-b9cd01ab5c67-200.jpg 200w',
        },
        twitter: '',
        github: '',
        linkedin: '',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'teamItem',
      itemType: blockNames.TeamItem,
      itemLabel: 'Member',
      min: 0,
      max: 5,
    },
  ],
  sideEditProps: [
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
}
export default Team
