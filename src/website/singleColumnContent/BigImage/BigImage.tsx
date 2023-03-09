import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import { photos } from 'website/shared/defaultImages'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from 'website/LayoutSideProps'

interface BigImageProps extends LayoutProps {}

const BigImage: types.Brick<BigImageProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
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
        <Image propName="image" alt="Image" maxWidth={1200} />
      </Container>
    </Section>
  )
}

BigImage.schema = {
  name: blockNames.BigImage,
  label: 'Image',
  category: 'single column / blog',
  tags: ['blog', 'image', 'single image'],
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    image: photos.SEASIDE,
  }),
  sideEditProps: [
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default BigImage
