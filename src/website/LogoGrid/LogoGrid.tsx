import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { bgColors, highlightTextColors } from '../colors'
import blockNames from '../blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
} from 'website/LayoutSideProps'

export interface LogoGridProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
  targetBlank: boolean
}

const LogoGrid: types.Brick<LogoGridProps> = ({
  backgroundColor,
  width,
  targetBlank,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container size={width}>
        <Repeater
          propName="badge"
          itemProps={{
            textAlign: 'left',
          }}
          renderWrapper={(items) => (
            <div className="mb-6 flex justify-start">{items}</div>
          )}
        />
        <div
          className={classNames(
            'grid gap-5 auto-rows-auto grid-flow-dense grid-cols-[repeat(auto-fill,_minmax(120px,_1fr))] lg:grid-cols-[repeat(auto-fill,_minmax(180px,_1fr))]'
          )}
        >
          <Repeater propName="logos" itemProps={{ targetBlank }} />
        </div>
      </Container>
    </Section>
  )
}
LogoGrid.schema = {
  name: blockNames.LogoGrid,
  label: 'Logo Grid',
  category: 'logo grid',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/LogoGrid/LogoGrid.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'none',
    borderBottom: 'none',
    width: 'medium',
    targetBlank: true,
    badge: [
      {
        text: 'Development',
        badgeColor: highlightTextColors.GRAY.value,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'logos',
      itemType: blockNames.LogoGridItem,
      itemLabel: 'Logo',
      min: 5,
      max: 25,
    },
    {
      name: 'badge',
      itemType: blockNames.Badge,
      itemLabel: 'Badge',
      min: 0,
      max: 1,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: false,
      props: [backgroundColorsEditProps, containerSizeEditProps],
    },
    {
      groupName: 'Links',
      defaultOpen: true,
      props: [
        {
          name: 'targetBlank',
          label: 'Open links in new window',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}
export default LogoGrid
