import * as React from 'react'
import { Repeater, types } from 'react-bricks/frontend'

import classNames from 'classnames'
import blockNames from '../blockNames'
import { bgColors } from '../colors'
import Container from '../layout/Container'
import Section, { Border } from '../layout/Section'
import { layoutType } from './FeatureItem'
import { LayoutProp } from '../LayoutSideProps'

export interface FeaturesProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  screenLayout: layoutType
}
const getRepeaterWidht = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'max-w-3xl'
    case 'small':
      return 'max-w-2xl'
    case 'small-3cols':
      return 'md:w-full max-w-5xl md:-mx-8'
  }
}

const Features: types.Brick<FeaturesProps> = ({
  bg = bgColors.white.value,
  borderTop = 'none',
  borderBottom = 'none',
  screenLayout = 'base',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={'lg'}
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="feature-item"
          renderWrapper={items => (
            <div
              className={classNames(
                'flex flex-wrap  justify-between mx-auto px-6 md:px-0',
                getRepeaterWidht(screenLayout)
              )}
            >
              {screenLayout === 'small-3cols' ? (
                <div className="grid md:grid-cols-3">{items}</div>
              ) : (
                items
              )}
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
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/Features.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'none',
    borderBottom: 'none',
    screenLayout: 'base',
    'feature-item': [
      {
        title: 'Front-end development',
        text:
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.',
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
        title: 'Request feedback',
        text:
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.',
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
        title: 'Front-end development',
        text:
          'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.',
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
      itemLabel: 'Feature',
      min: 0,
      max: 4,
    },
  ],
  sideEditProps: [
    LayoutProp(),
    {
      name: 'screenLayout',
      label: 'Screen Layout',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Select,
        options: [
          { value: 'base', label: 'Two columns' },
          { value: 'small', label: 'Small two columns' },
          { value: 'small-3cols', label: 'Three columns' },
        ],
      },
    },
  ],
}
export default Features
