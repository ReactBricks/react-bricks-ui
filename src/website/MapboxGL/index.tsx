import React, { useEffect, useRef } from 'react'
import mapboxgl from 'mapbox-gl'
import { types } from 'react-bricks'

import blockNames from '../blockNames'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import { bgColors } from '../colors'

mapboxgl.accessToken =
  'pk.eyJ1IjoiZ2lvYm5zIiwiYSI6ImNrajAwaXlpZDA2Z2Qyc2xnNWUwZWxzcTUifQ.MFKZhEkGma_UkTrOZVkEaQ'

export interface MapProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  size?: 'medium' | 'large'
  width?: Size

  lat: number
  lng: number
  zoom?: number // Range
  height?: number // Range
}

const Map: types.Brick<MapProps> = ({
  width,
  borderTop,
  bg,
  borderBottom,
  lat = 45.9,
  lng = 9.5,
  zoom = 12,
}) => {
  const mapRef = useRef(null)
  console.log({ mapRef })
  // const iframe = document.getElementById('rb-admin-frame')
  // const element = iframe.contentWindow..document.getElementById()
  useEffect(() => {
    // console.log(mapRef.current, 'useeffect2')
    // setTimeout(() => {
    //   new mapboxgl.Map({
    //     container: 'root',
    //     style: 'mapbox://styles/giobns/ckkp83cnr0vqg18mrv6denz1w',
    //     center: [lng, lat],
    //     zoom: zoom,
    //   })
    // }, 5000)
  }, [])

  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container size={width}>
        <div ref={mapRef} id="map" className=" bg-red-500 w-20 h-20" />
        {lat}
        {lng}
        {zoom}
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
    height: 350,
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
          name: 'height',
          label: 'Height',
          type: types.SideEditPropType.Number,
        },
      ],
    },
  ],
}
export default Map
