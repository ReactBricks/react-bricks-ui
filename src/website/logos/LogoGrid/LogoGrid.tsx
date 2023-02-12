import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import Container, { Size } from '../../shared/layout/Container'
import Section, { Border } from '../../shared/layout/Section'
import { bgColors, highlightTextColors } from '../../colors'
import blockNames from '../../blockNames'
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
  category: 'logos',
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
        text: 'Technologies',
        badgeColor: highlightTextColors.GRAY.value,
      },
    ],
    logos: [
      {
        image: {
          src: 'https://images.reactbricks.com/original/5a717763-afd5-4ec5-8a68-12a0d6e4fd08.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/5a717763-afd5-4ec5-8a68-12a0d6e4fd08.svg',
          srcSet: '',
          alt: 'React',
          seoName: 'react',
          width: 120,
          height: 60,
        },
        link: 'https://reactjs.org/',
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/272fad93-049f-4cd7-bdd9-4ed823ba2599.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/272fad93-049f-4cd7-bdd9-4ed823ba2599.svg',
          srcSet: '',
          alt: 'Vue',
          seoName: 'vue',
          width: 120,
          height: 60,
        },
        link: 'https://vuejs.org/',
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/44c7c7db-06f9-4e33-b017-1b32a397b96b.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/44c7c7db-06f9-4e33-b017-1b32a397b96b.svg',
          srcSet: '',
          alt: 'Svelte',
          seoName: 'svelte',
          width: 800,
          height: 800,
        },
        link: 'https://svelte.dev/',
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/99a92b01-c9a6-482b-8ed6-aefb20687754.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/99a92b01-c9a6-482b-8ed6-aefb20687754.svg',
          srcSet: '',
          alt: 'Solidjs',
          seoName: 'solidjs',
          width: 382.23,
          height: 70.7,
        },
        link: 'https://www.solidjs.com/',
      },
      {
        image: {
          src: 'https://images.reactbricks.com/original/faba4d56-5733-432c-a38d-25d701ea7dcf.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/faba4d56-5733-432c-a38d-25d701ea7dcf.svg',
          srcSet: '',
          alt: 'Astro',
          seoName: 'astro-build',
          width: 2712,
          height: 894,
        },
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
