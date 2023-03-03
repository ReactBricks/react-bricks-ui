import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import blockNames from '../../blockNames'
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

interface LinkCardsProps extends LayoutProps {}

const LinkCards: types.Brick<LinkCardsProps> = ({
  backgroundColor,
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
        size="medium"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className="grid gap-5 sm:grid-cols-2"
      >
        <Repeater propName="cards" />
      </Container>
    </Section>
  )
}
LinkCards.schema = {
  name: blockNames.LinkCards,
  label: 'Link cards',
  category: 'features',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    cards: [
      {
        title: 'Visual editing',
        text: 'The best UX on the market.',
        linkPath: 'https://reactbricks.com/visual-editing-cms',
        withIcon: true,
        icon: icons.VISUAL_EDITING,
      },
      {
        title: 'React components',
        text: 'Add visual magic to your components.',
        linkPath: 'https://reactbricks.com/react-cms',
        withIcon: true,
        icon: icons.COMPONENTS,
      },
      {
        title: 'Multilanguage',
        text: 'Internationalization? Built in.',
        withIcon: true,
        icon: icons.MULTILANGUAGE,
      },
      {
        title: 'Scheduled publishing',
        text: 'Publish at midnight? Roger.',
        withIcon: true,
        icon: icons.SCHEDULED_PUBLISHING,
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'cards',
      itemType: blockNames.LinkCard,
      itemLabel: 'Card',
      min: 0,
      max: 8,
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
  ],
}
export default LinkCards
