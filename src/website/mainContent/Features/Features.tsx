import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import blockNames from '../../blockNames'
import { bgColors } from '../../colors'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import {
  neutralBackgroundColorsEditProps,
  sectionBordersEditProps,
  sectionDefaults,
  LayoutProps,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import { icons } from 'website/shared/defaultImages'

export type ColsNumber = '2' | '3' | '4'

interface FeaturesProps extends LayoutProps {
  colsNumber: ColsNumber
}

const Features: types.Brick<FeaturesProps> = ({
  backgroundColor = bgColors.WHITE.value,
  colsNumber,
  paddingTop,
  paddingBottom,
  borderTop,
  borderBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={colsNumber === '2' ? 'small' : 'medium'}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={classNames('flex flex-wrap justify-between')}
      >
        <Repeater propName="features" itemProps={{ colsNumber: colsNumber }} />
      </Container>
    </Section>
  )
}
Features.schema = {
  name: blockNames.Features,
  label: 'Features',
  category: 'main content',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingBottom: 'none',
    colsNumber: '2',
    features: [
      {
        title: 'The best experience for editors',
        text: 'Your marketing team hates gray forms. Give them the easiest UX.',
        withIcon: true,
        withLink: false,
        image: icons.PHOTO_STACK,
      },
      {
        title: 'React components for devs',
        text: 'Leverage React to create amazing visually editable content blocks.',
        withIcon: true,
        withLink: false,
        image: icons.MIND_MAP,
      },
      {
        title: 'Your design system',
        text: 'Deploy your pixel-perfect design system and be sure nobody can break it..',
        withIcon: true,
        withLink: false,
        image: icons.RADAR_PLOT,
      },
      {
        title: 'Enterprise ready',
        text: 'Collaboration, localization, granular permissions, SSO, top support: we got you covered.',
        withIcon: true,
        withLink: false,
        image: icons.DATABASE,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'features',
      itemType: blockNames.FeatureItem,
      itemLabel: 'Feature',
      min: 0,
      max: 9,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Background',
      defaultOpen: false,
      props: [neutralBackgroundColorsEditProps],
    },
    {
      groupName: 'Padding & Borders',
      defaultOpen: false,
      props: [...sectionPaddingsEditProps, ...sectionBordersEditProps],
    },
    {
      groupName: 'Columns',
      defaultOpen: true,
      props: [
        {
          name: 'colsNumber',
          label: 'Columns number',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: '2', label: '2 columns' },
              { value: '3', label: '3 columns' },
              { value: '4', label: '4 columns' },
            ],
          },
        },
      ],
    },
  ],
}
export default Features
