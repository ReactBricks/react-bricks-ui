import React from 'react'
import { types } from 'react-bricks/frontend'
import { Map, Marker } from 'pigeon-maps'
import { maptiler } from 'pigeon-maps/providers'

const MAPTILER_ACCESS_TOKEN = 'zGVHxdSZR3rlLBsL6hUv#0.5'
const mapTilerProvider = maptiler(MAPTILER_ACCESS_TOKEN, 'streets')

import blockNames from '../../blockNames'
import Section from '../../shared/components/Section'
import Container from '../../shared/components/Container'
import {
  containerWidthSideGroupWithFull,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'

export interface MapProps extends LayoutProps {
  zoom: string
  lat: string
  lng: string
}

// const mapTilerProvider = (x: number, y: number, z: number, dpr?: number) => {
//   return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
//     dpr && dpr >= 2 ? '@2x' : ''
//   }.png?key=${MAPTILER_ACCESS_TOKEN}`
// }

export const MapBrick: types.Brick<MapProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
  lat = '45.6782509',
  lng = '9.5669407',
  zoom = '10',
}) => {
  let mapTilerProviderProp = {}
  if (MAPTILER_ACCESS_TOKEN) {
    mapTilerProviderProp = {
      provider: mapTilerProvider,
    }
  }
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
        <Map
          center={[parseFloat(lat), parseFloat(lng)]}
          height={350}
          metaWheelZoom
          zoom={parseInt(zoom, 10)}
          {...mapTilerProviderProp}
          dprs={[1, 2]}
          metaWheelZoomWarning="Use ctrl + wheel to zoom!"
          attribution={false}
          //attributionPrefix=""
        >
          <Marker anchor={[parseFloat(lat), parseFloat(lng)]} />
        </Map>
      </Container>
    </Section>
  )
}

MapBrick.schema = {
  name: blockNames.Map,
  label: 'Map',
  category: 'contact',
  tags: ['contacts', 'map'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Map/Map.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    lat: 45.6782509,
    lng: 9.5669407,
    zoom: 6,
  }),
  sideEditProps: [
    {
      groupName: 'Map',
      defaultOpen: true,
      props: [
        {
          name: 'zoom',
          label: 'Zoom',
          type: types.SideEditPropType.Number,
        },
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
        {
          name: 'maptiler',
          label: 'MapTiler',
          type: types.SideEditPropType.Custom,
          show: () => !MAPTILER_ACCESS_TOKEN,
          component: () => {
            if (!MAPTILER_ACCESS_TOKEN) {
              return (
                <p className="text-sm">
                  For better maps, please create a MapTiler free account and set
                  the <code className="text-xs">MAPTILER_ACCESS_TOKEN</code>{' '}
                  string.
                </p>
              )
            }
            return null
          },
        },
      ],
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroupWithFull,
  ],
}
export default MapBrick
