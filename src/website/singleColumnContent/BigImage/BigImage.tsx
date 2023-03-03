import React from 'react'
import { Image, types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import Container from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'
import { photos } from 'website/shared/defaultImages'

const BigImage: types.Brick = () => {
  return (
    <Section>
      <Container size="small" paddingTop="none" paddingBottom="none">
        <Image propName="image" alt="Image" maxWidth={1200} />
      </Container>
    </Section>
  )
}

BigImage.schema = {
  name: blockNames.BigImage,
  label: 'Image',
  category: 'single column / blog',
  getDefaultProps: () => ({
    image: photos.SEASIDE,
  }),
}

export default BigImage
