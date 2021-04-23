import React from 'react'
import { types } from 'react-bricks'
import { Map, Marker } from 'pigeon-maps'

import blockNames from '../blockNames'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import { bgColors } from '../colors'

export interface MapProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  width?: Size

  lat: number
  lng: number
}
const MAPTILER_ACCESS_TOKEN = 'zGVHxdSZR3rlLBsL6hUv#0.5'
const MAP_ID = 'streets'

const mapTilerProvider = (x: any, y: any, z: any, dpr: any) => {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr >= 2 ? '@2x' : ''
  }.png?key=${MAPTILER_ACCESS_TOKEN}`
}

export const MapBrick: types.Brick<MapProps> = ({
  width,
  borderTop,
  bg,
  borderBottom,
  lat = 45.9,
  lng = 9.5,
  ...rest
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container size={width}>
        <Map
          center={[lat, lng]}
          height={350}
          metaWheelZoom
          zoom={10}
          provider={mapTilerProvider}
          dprs={[1, 2]}
          {...rest}
        >
          <Marker anchor={[lat, lng]} />
        </Map>
      </Container>
    </Section>
  )
}

MapBrick.schema = {
  name: blockNames.Map,
  label: 'Map',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Map/index.tsx',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'none',
    borderBottom: 'none',
    width: 'full',
    lat: 45.6782509,
    lng: 9.5669407,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      props: [
        {
          name: 'bg',
          label: 'Background',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Color,
            options: [bgColors.white, bgColors.light, bgColors.gray],
          },
        },
        {
          name: 'borderTop',
          label: 'Border Top',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'borderBottom',
          label: 'Border Bottom',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'none', label: 'None' },
              { value: 'full', label: 'Full-width' },
              { value: 'boxed', label: 'Boxed' },
            ],
          },
        },
        {
          name: 'width',
          label: 'Width',
          type: types.SideEditPropType.Select,
          selectOptions: {
            display: types.OptionsDisplay.Select,
            options: [
              { value: 'full', label: 'Full-width' },
              { value: 'lg', label: 'Boxed Large' },
              { value: 'md', label: 'Boxed Medium' },
              { value: 'sm', label: 'Boxed Small' },
            ],
          },
        },
      ],
    },
    {
      groupName: 'Map',
      defaultOpen: true,
      props: [
        {
          name: 'lat',
          label: 'Latitude',
          type: types.SideEditPropType.Number,
        },
        {
          name: 'lng',
          label: 'Longitude',
          type: types.SideEditPropType.Number,
        },
      ],
    },
  ],
}
export default MapBrick
