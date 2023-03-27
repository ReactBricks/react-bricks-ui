import React from 'react'
import { types } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import Container from '../../shared/components/Container'
import Section from '../../shared/components/Section'
import Video from '../../shared/components/Video'

interface SingleColumnVideoProps extends LayoutProps {
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
  category: 'single column / blog',
  tags: ['blog', 'video'],

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
      groupName: 'Video type',
      defaultOpen: true,
      props: [
        {
          name: 'videoType',
          label: 'Video type',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Radio,
            options: [
              {
                value: 'file',
                label: 'File (.mp4)',
              },
              {
                value: 'streaming',
                label: 'YouTube or Vimeo',
              },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Video source',
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
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default SingleColumnVideo
