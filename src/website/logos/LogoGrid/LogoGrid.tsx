import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { bgColors, highlightTextColors } from '../../colors'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import { logos } from '../../shared/defaultImages'

export interface LogoGridProps extends LayoutProps {
  targetBlank: boolean
}

const LogoGrid: types.Brick<LogoGridProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  targetBlank,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
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
  category: 'logos',
  tags: ['logo grid', 'logos', 'logo cloud', 'customers'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/LogoGrid/LogoGrid.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    targetBlank: true,
    badge: [
      {
        text: 'Technologies',
        badgeColor: highlightTextColors.GRAY.value,
      },
    ],
    logos: [
      {
        image: logos.REACT,
        link: 'https://reactjs.org/',
      },
      {
        image: logos.VUE,
        link: 'https://vuejs.org/',
      },
      {
        image: logos.SVELTE,
        link: 'https://svelte.dev/',
      },
      {
        image: logos.SOLID,
        link: 'https://www.solidjs.com/',
      },
      {
        image: logos.ASTRO,
        link: 'https://astro.build/',
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
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}
export default LogoGrid
