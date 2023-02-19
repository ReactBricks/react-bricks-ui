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
import Container, { Padding, Size } from 'website/shared/layout/Container'
import Section, { Border } from 'website/shared/layout/Section'
import TitleSubtitle from 'website/shared/layout/TitleSubtitle'

interface Props {
  backgroundColor: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  paddingTop: Padding
  paddingBottom: Padding
  borderTop: Border
  borderBottom: Border
  width: Size
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
        <TitleSubtitle />
      </Container>
    </Section>
  )
}

Title.schema = {
  name: blockNames.Title,
  label: 'Title',
  category: 'content sections',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    title: 'Thick as a brick',
    subtitle: 'Another brick in the wall',
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
  ],
}

export default Title
