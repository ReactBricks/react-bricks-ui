import React from 'react'
import { types } from 'react-bricks'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

export interface VideoBrickProps {
  url: string
  social: string
  bg?: { color: string; className: string }
}

const VideoBrick: types.Brick<VideoBrickProps> = ({
  bg = bgColors.white.value,
  social,
  url,
}) => {
  return (
    <Section bg={bg}>
      <Container>
        <div className="aspect-w-16 aspect-h-9">
          <iframe width="100%" height="100%" src={`${social}${url}?rel=0`} />
        </div>
      </Container>
    </Section>
  )
}
VideoBrick.schema = {
  name: blockNames.VideoBrick,
  label: 'Embed Video',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/VideoBrick/index.tsx',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    url: '1BjgwtG92CI',
    social: 'https://www.youtube.com/embed/',
  }),
  sideEditProps: [
    {
      name: 'social',
      label: 'Social emitter?',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Radio,
        options: [
          { value: 'https://www.youtube.com/embed/', label: 'YouTube' },
          { value: 'https://player.vimeo.com/video/', label: 'Vimeo' },
        ],
      },
    },
    {
      name: 'url',
      label: 'ID Video',
      type: types.SideEditPropType.Text,
    },
  ],
}
export default VideoBrick
