import * as React from 'react'
import { Plain, Repeater, types } from 'react-bricks'

import classNames from 'classnames'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container, { Size } from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { layoutType } from './FeatureItem'

export interface FeaturesProps {
  bg?: { color: string; className: string }
  width?: Size
  borderTop?: Border
  borderBottom?: Border
  screenLayout: layoutType
}

const Features: types.Brick<FeaturesProps> = ({
  bg = bgColors.white.value,
  width = 'lg',
  borderTop = 'none',
  borderBottom = 'none',
  screenLayout = 'base',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="feature-item"
          renderWrapper={items => (
            <div className="flex flex-wrap max-w-3xl justify-between">
              {items}
            </div>
          )}
          itemProps={{ screenLayout: screenLayout }}
        />
      </Container>
    </Section>
  )
}
Features.schema = {
  name: blockNames.Features,
  label: 'Features',
  getDefaultProps: () => ({
    bg: {
      label: 'White',
      value: {
        color: '#fff',
        className: 'bg-white dark:bg-gray-900',
      },
    },
    borderTop: 'none',
    borderBottom: 'none',
    width: 'lg',
    screenLayout: 'base',
    'feature-item': [
      {
        title: Plain.deserialize('Front-end development'),
        text: Plain.deserialize(
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.'
        ),
        screenLayout: 'base',
        image: {
          src:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
      {
        title: Plain.deserialize('Request feedback'),
        text: Plain.deserialize(
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.'
        ),
        screenLayout: 'base',
        image: {
          src:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
      {
        title: Plain.deserialize('Front-end development'),
        text: Plain.deserialize(
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.'
        ),
        screenLayout: 'base',
        image: {
          src:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          placeholderSrc:
            'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
          srcSet: '',
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'feature-item',
      itemType: blockNames.FeatureItem,
      itemLabel: 'FeatureItem',
      min: 0,
      max: 4,
    },
  ],
  sideEditProps: [
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
          { value: 'sm', label: 'Small' },
          { value: 'md', label: 'Medium' },
          { value: 'lg', label: 'Large' },
        ],
      },
    },
    {
      name: 'screenLayout',
      label: 'Screen Layout',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'base', label: 'Base' },
          { value: 'small', label: 'Small' },
          { value: 'small-3cols', label: 'Small with 3 columns' },
        ],
      },
    },
  ],
}
export default Features
