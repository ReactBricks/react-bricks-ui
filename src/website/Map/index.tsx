import * as React from 'react'
import { useState, useEffect, useContext, useRef } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Map as LeafletMap, TileLayer as LeafletTileLayer } from 'leaflet'
import { types, ReactBricksContext } from 'react-bricks'

import { bgColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import blockNames from '../blockNames'

const ACCESS_TOKEN =
  'pk.eyJ1IjoiZjJuZXQiLCJhIjoiY2tmNzlyYTUyMDBidzJybXFkdnFzODIzNCJ9.lqbSkfReUUCBy0nmAUC-LA'

const TILES = {
  mapbox: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN}`,
  mapboxDark: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}@2x?access_token=${ACCESS_TOKEN}`,
}

export interface MapProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  width?: Size

  lat: number
  lng: number
  zoom?: number // Range
  scrollWheelZoom?: boolean
  height?: number // Range
  text?: string
  showMarker?: boolean
}

const Map: types.Brick<MapProps> = ({
  bg = bgColors.white.value,
  borderTop = 'none',
  borderBottom = 'none',
  width = 'full',
  lat,
  lng,
  zoom = 12,
  scrollWheelZoom = false,
  height = 350,
  text,
  showMarker = true,
}) => {
  const tileLayerRef = useRef<React.RefObject<LeafletTileLayer> | null>(null)

  const { isDarkColorMode } = useContext(ReactBricksContext)

  const [map, setMap] = useState<LeafletMap | null>(null)

  useEffect(() => {
    if (map) {
      map.setView([lat, lng], zoom)
      //tileLayerRef.current?.current?.redraw()
      tileLayerRef.current?.current?.setUrl(
        isDarkColorMode ? TILES.mapboxDark : TILES.mapbox
      )
    }
  }, [lat, lng, zoom, scrollWheelZoom, isDarkColorMode])

  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container size={width}>
        {lat && lng && zoom && (
          <MapContainer
            center={[lat, lng]}
            zoom={zoom}
            style={{ width: '100%', height }}
            scrollWheelZoom={scrollWheelZoom}
            whenCreated={setMap}
          >
            <TileLayer
              //@ts-ignore ?!?
              ref={tileLayerRef}
              //attribution='&amp;copy <a href="https://mapbox.com">MapBox</a>'
              url={isDarkColorMode ? TILES.mapboxDark : TILES.mapbox}
              //tileSize={512}
              //zoomOffset={-1}
            />
            {showMarker && (
              <Marker position={[lat, lng]}>
                {text && (
                  <Popup>
                    <span className="font-bold">{text}</span>
                  </Popup>
                )}
              </Marker>
            )}
          </MapContainer>
        )}
      </Container>
    </Section>
  )
}

Map.schema = {
  name: blockNames.Map,
  label: 'Map',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    borderTop: 'none',
    borderBottom: 'none',
    width: 'full',
    lat: 45.6782509,
    lng: 9.5669407,
    zoom: 14,
    scrollWheelZoom: false,
    height: 350,
    text: 'Home',
    showMarker: true,
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
        {
          name: 'zoom',
          label: 'Zoom',
          type: types.SideEditPropType.Range,
          rangeOptions: {
            min: 5,
            max: 16,
            step: 1,
          },
        },
        {
          name: 'scrollWheelZoom',
          label: 'Allow zoom on scroll',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'height',
          label: 'Height',
          type: types.SideEditPropType.Number,
        },
        {
          name: 'showMarker',
          label: 'Show marker',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'text',
          label: 'Marker text',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default Map
