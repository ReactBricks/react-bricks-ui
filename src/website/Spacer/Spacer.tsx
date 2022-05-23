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
    case '2':
      return 'py-6'
    case '4':
      return 'py-8'
    case '6':
      return 'py-10'
    case '8':
      return 'py-12'
    case '10':
      return 'py-14'
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
  sideEditProps: [
    BackgroundColorsSideEditProps,
    {
      name: 'range',
      label: 'Width',
      shouldRefreshText: true,
      type: types.SideEditPropType.Range,
      rangeOptions: {
        min: 2,
        max: 10,
        step: 2,
      },
    },
  ],
}

export default Spacer
