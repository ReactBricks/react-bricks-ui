import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import {
  backgroundColorsEditProps,
  containerSizeEditPropsWithFull,
  sectionBordersEditProps,
  sectionDefaults,
  sectionPaddingsEditProps,
} from 'website/LayoutSideProps'
import Container, { Padding, Size } from 'website/shared/components/Container'
import Section, { Border } from 'website/shared/components/Section'
import Video from 'website/shared/components/Video'

interface SingleColumnVideoProps {
  backgroundColor?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  paddingTop?: Padding
  paddingBottom?: Padding
  width?: Size
  videoType: 'file' | 'streaming'
  platform: 'youtube' | 'vimeo'
  videoId: string
}

const SingleColumnVideo: types.Brick<SingleColumnVideoProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  videoType,
  platform,
  videoId,
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
        <Video type={videoType} platform={platform} videoId={videoId} />
      </Container>
    </Section>
  )
}

SingleColumnVideo.schema = {
  name: blockNames.Video,
  label: 'Video',
  category: 'single-column',
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    videoType: 'streaming',
    platform: 'youtube',
    videoId: 'T4ZMNcNq2Fw',
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
        containerSizeEditPropsWithFull,
      ],
    },
    {
      groupName: 'video',
      defaultOpen: true,
      show: ({ videoType }) => videoType === 'streaming',
      props: [
        {
          name: 'platform',
          label: 'Video platform',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              { value: 'youtube', label: 'YouTube' },
              { value: 'vimeo', label: 'Vimeo' },
            ],
          },
        },
        {
          name: 'videoId',
          label: 'Video ID (i.e. "T4ZMNcNq2Fw")',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default SingleColumnVideo
