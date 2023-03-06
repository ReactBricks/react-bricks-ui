import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionBordersEditProps,
  sectionDefaults,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import Container, { Padding, Size } from 'website/shared/components/Container'
import Section, { Border } from 'website/shared/components/Section'
import TitleSubtitle from 'website/shared/components/TitleSubtitle'

interface Props {
  backgroundColor: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
  width: Size
  bigCentered: boolean
  extraboldTitle: boolean
}

const Title: types.Brick<Props> = ({
  backgroundColor,
  backgroundImage,
  backgroundImageDark,
  paddingTop,
  paddingBottom,
  borderTop,
  borderBottom,
  width,
  bigCentered,
  extraboldTitle,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      backgroundImage={backgroundImage}
      backgroundImageDark={backgroundImageDark}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <TitleSubtitle
          bigCentered={bigCentered}
          extraboldTitle={extraboldTitle}
        />
      </Container>
    </Section>
  )
}

Title.schema = {
  name: blockNames.Title,
  label: 'Title',
  category: 'single column / blog',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    paddingTop: '0',
    paddingBottom: '0',
    title: 'Thick as a brick',
    subtitle: "All in all you're just another brick in the page",
    bigCentered: true,
    extraboldTitle: false,
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      groupName: 'Background',
      defaultOpen: false,
      props: [backgroundColorsEditProps],
    },
    {
      groupName: 'Padding & Borders',
      defaultOpen: false,
      props: [
        ...sectionPaddingsEditProps,
        ...sectionBordersEditProps,
        containerSizeEditProps,
      ],
    },
    {
      groupName: 'Text',
      defaultOpen: true,
      props: [
        {
          name: 'bigCentered',
          label: 'Big centered',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'extraboldTitle',
          label: 'Extra bold Title',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
  ],
}

export default Title
