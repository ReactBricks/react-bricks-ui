import React from 'react'
import { types } from 'react-bricks/frontend'
import { bgColors } from '../../colors'
import blockNames from '../../blockNames'
import Section from '../../shared/components/Section'
import { backgroundColorsEditProps, LayoutProps } from '../../LayoutSideProps'

export interface SpacerProps extends LayoutProps {
  height: number
}

const getPadding = (height: string) => {
  switch (height) {
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

const Spacer: types.Brick<SpacerProps> = ({ height, backgroundColor }) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <div className={getPadding(height + '')} />
    </Section>
  )
}

Spacer.schema = {
  name: blockNames.Spacer,
  label: 'Spacer',
  category: 'separator',
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    height: '5',
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [
        {
          name: 'height',
          label: 'Height',
          shouldRefreshText: true,
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 0,
            max: 10,
            step: 1,
          },
        },
        backgroundColorsEditProps,
      ],
    },
  ],
}

export default Spacer
