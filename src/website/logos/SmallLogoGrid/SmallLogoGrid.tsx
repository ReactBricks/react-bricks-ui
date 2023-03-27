import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import { highlightTextColors } from '../../colors'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import { iconLogos } from '../../shared/defaultImages'

export interface SmallLogoGridProps extends LayoutProps {
  targetBlank: boolean
}

const SmallLogoGrid: types.Brick<SmallLogoGridProps> = ({
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
            'grid gap-5 auto-rows-auto grid-cols-[repeat(auto-fit,_minmax(60px,_60px))]'
          )}
        >
          <Repeater propName="logos" itemProps={{ targetBlank }} />
        </div>
      </Container>
    </Section>
  )
}
SmallLogoGrid.schema = {
  name: blockNames.SmallLogoGrid,
  label: 'Small Logo Grid',
  category: 'logos',
  tags: ['logo grid', 'logos', 'logo cloud', 'customers'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/LogoGrid/LogoGrid.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    targetBlank: true,
    badge: [
      {
        text: 'Technologies',
        badgeColor: highlightTextColors.GRAY.value,
      },
    ],
    logos: [
      {
        image: iconLogos.REACT,
        link: 'https://reactjs.org/',
      },
      {
        image: iconLogos.VUE,
        link: 'https://vuejs.org/',
      },
      {
        image: iconLogos.SVELTE,
        link: 'https://svelte.dev/',
      },
      {
        image: iconLogos.SOLID,
        link: 'https://www.solidjs.com/',
      },
      {
        image: iconLogos.ASTRO,
        link: 'https://astro.build/',
      },
      {
        image: iconLogos.REACT,
        link: 'https://reactjs.org/',
      },
      {
        image: iconLogos.VUE,
        link: 'https://vuejs.org/',
      },
      {
        image: iconLogos.SVELTE,
        link: 'https://svelte.dev/',
      },
      {
        image: iconLogos.SOLID,
        link: 'https://www.solidjs.com/',
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'logos',
      itemType: blockNames.SmallLogoGridItem,
      itemLabel: 'Logo',
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
export default SmallLogoGrid
