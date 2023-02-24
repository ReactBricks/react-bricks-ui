import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container, { Size } from '../../shared/components/Container'
import Section, { Border } from '../../shared/components/Section'
import { bgColors, highlightTextColors } from '../../colors'
import blockNames from '../../blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
} from 'website/LayoutSideProps'
import { iconLogos } from 'website/shared/defaultImages'

export interface SmallLogoGridProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
  targetBlank: boolean
}

const SmallLogoGrid: types.Brick<SmallLogoGridProps> = ({
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
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/LogoGrid/LogoGrid.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'none',
    borderBottom: 'none',
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
export default SmallLogoGrid
