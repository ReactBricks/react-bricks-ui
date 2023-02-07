import React from 'react'
import { File, types } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

export interface VideoFileProps {
  url: string
  platform: string
}

const VideoFile: types.Brick<VideoFileProps> = ({ platform, url }) => {
  return (
    <Section>
      <Container>
        <div className="aspect-video">
          <File
            propName="videoFile"
            renderBlock={(file) => {
              return file ? (
                <video src={url} />
              ) : (
                <div className="flex justify-center items-center">
                  <FiFilePlus className="mr-2" />
                  Add document
                </div>
              )
            }}
          />
        </div>
      </Container>
    </Section>
  )
}
VideoFile.schema = {
  name: blockNames.VideoFile,
  label: 'Local Video',
  category: 'video',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Video/Video.tsx',
  getDefaultProps: () => ({}),
  sideEditProps: [
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
      name: 'url',
      label: 'Video ID (i.e. "A60xWr-nqv0")',
      type: types.SideEditPropType.Text,
    },
  ],
}
export default VideoFile
