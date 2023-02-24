import React from 'react'
import { types } from 'react-bricks/frontend'
import { Repeater } from 'react-bricks/frontend'
import Container, { Size } from 'website/shared/components/Container'
import Section from 'website/shared/components/Section'

import blockNames from 'website/blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditProps,
  sectionBordersEditProps,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'

interface ThumbnailsProps {
  backgroundColor?: { color: string; className: string }
  width?: Size
  colNumber: string
}

const Thumbnails: types.Brick<ThumbnailsProps> = ({
  backgroundColor,
  width,
  colNumber,
}) => {
  return (
    <Section backgroundColor={backgroundColor}>
      <Container
        size={width}
        className={`grid lg:grid-cols-${colNumber} xl:grid-cols-${colNumber} 2xl:grid-cols-${colNumber} gap-[30px] grid-cols-1 md:grid-cols-2`}
      >
        <Repeater propName="thumb-brick" />
      </Container>
    </Section>
  )
}

Thumbnails.schema = {
  name: blockNames.Thumbnails,
  label: 'Thumbnails',
  category: 'features',
  getDefaultProps: () => ({
    colNumber: 2,
  }),
  repeaterItems: [
    {
      name: 'thumb-brick',
      itemType: blockNames.Thumbnail,
      itemLabel: 'Thumbnail',
      min: 0,
      max: 6,
    },
  ],
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
      groupName: 'Columns',
      props: [
        {
          name: 'colNumber',
          label: 'column number',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 1, label: '1' },
              { value: 2, label: '2' },
              { value: 3, label: '3' },
            ],
          },
        },
      ],
    },
  ],
}

export default Thumbnails
