import React from 'react'
import { types } from 'react-bricks'
import blockNames from '../blockNames'
import Container from '../layout/Container'

export interface VideoBrickProps {
  url: string
  social: string
}

const VideoBrick: types.Brick<VideoBrickProps> = ({ social, url }) => {
  return (
    <Container className=" mt-8">
      <div className="aspect-w-16 aspect-h-9">
        <iframe width="100%" height="100%" src={`${social}${url}?rel=0`} />
      </div>
    </Container>
  )
}
VideoBrick.schema = {
  name: blockNames.VideoBrick,
  label: 'Embed Video',
  getDefaultProps: () => ({
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
