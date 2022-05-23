import React from 'react'
import { types } from 'react-bricks'
import blockNames from 'website/blockNames'
import Section from 'website/layout/Section'
import { BackgroundColorsSideEditProps } from 'website/LayoutSideProps'

interface Props {
  range: number
  bg?: { color: string; className: string }
}

const switchRange = (range: string) => {
  switch (range) {
    case '0':
      return 'py-1'
    case '1':
      return 'py-2'
    case '2':
      return 'py-3'
    case '3':
      return 'py-4'
    case '4':
      return 'py-5'
    case '5':
      return 'py-6'
    case '6':
      return 'py-10'
    case '7':
      return 'py-12'
    case '8':
      return 'py-14'
    case '9':
      return 'py-16'
    case '10':
      return 'py-20'
    default:
      return 'py-6'
  }
}

const Spacer: types.Brick<Props> = ({ range, bg }) => {
  return (
    <Section bg={bg}>
      <div className={switchRange(range + '')} />
    </Section>
  )
}

Spacer.schema = {
  name: blockNames.Spacer,
  label: 'Spacer',
  category: 'rb-ui website',
  getDefaultProps: () => ({
    bg: { color: '#fff', className: 'bg-white dark:bg-gray-900' },
    range: '5',
  }),
  sideEditProps: [
    BackgroundColorsSideEditProps,
    {
      name: 'range',
      label: 'Height',
      shouldRefreshText: true,
      type: types.SideEditPropType.Range,
      rangeOptions: {
        min: 0,
        max: 10,
        step: 1,
      },
    },
  ],
}

export default Spacer
