import React from 'react'
import { types } from 'react-bricks/frontend'
import { Map, Marker } from 'pigeon-maps'

import blockNames from '../blockNames'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import { bgColors } from '../colors'
import { BackgroundColorsSideEditProps } from 'website/LayoutSideProps'

export interface MapProps {
  bg?: { color: string; className: string }
  size?: 'medium' | 'large'
  width?: Size

  lat: number
  lng: number
}
const MAPTILER_ACCESS_TOKEN = 'zGVHxdSZR3rlLBsL6hUv#0.5'
const MAP_ID = 'streets'

const mapTilerProvider = (x: number, y: number, z: number, dpr?: number) => {
  return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
    dpr && dpr >= 2 ? '@2x' : ''
  }.png?key=${MAPTILER_ACCESS_TOKEN}`
}

export const MapBrick: types.Brick<MapProps> = ({
  width,
  bg,
  lat = 45.9,
  lng = 9.5,
  ...rest
}) => {
  return (
    <Section bg={bg}>
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
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Map/Map.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'sm',
    lat: 45.6782509,
    lng: 9.5669407,
  }),
  sideEditProps: [
    BackgroundColorsSideEditProps,
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
