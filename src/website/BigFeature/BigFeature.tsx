import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { bgColors, textColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container, { Size } from '../layout/Container'
import blockNames from '../blockNames'
import { LayoutProp } from '../LayoutSideProps'

export interface BigFeatureProps {
  bg?: { color: string; className: string }
  borderTop?: Border
  borderBottom?: Border
  width?: Size
}

const BigFeature: types.Brick<BigFeatureProps> = ({
  bg = bgColors.white.value,
  borderTop = 'boxed',
  borderBottom = 'none',
  width = 'sm',
}) => {
  return (
    <Section bg={bg} borderTop={borderTop} borderBottom={borderBottom}>
      <Container
        size={width}
        className={classNames(
          'py-12 flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="sm:mr-10 mb-4 sm:mb-0 w-32">
          <Image propName="imageSource" alt="image" />
        </div>
        <div className="flex-1">
          <Text
            propName="title"
            renderBlock={props => (
              <div
                className={classNames(
                  'font-extrabold text-xl leading-6 mb-1',
                  textColors.gray900
                )}
                {...props.attributes}
              >
                {props.children}
              </div>
            )}
            placeholder="Title"
          />
          <RichText
            propName="text"
            renderBlock={props => (
              <span
                className={classNames('leading-6', textColors.gray700)}
                {...props.attributes}
              >
                {props.children}
              </span>
            )}
            placeholder="Text"
            allowedFeatures={[types.RichTextFeatures.Link]}
          />
        </div>
      </Container>
    </Section>
  )
}

BigFeature.schema = {
  name: blockNames.BigFeature,
  label: 'Feature callout',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/BigFeature/BigFeature.tsx',

  getDefaultProps: () => ({
    bg: {
      color: '#fff',
      className: 'bg-white dark:bg-gray-900',
    },
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
    title: 'Easy like Wix, but your own.',
    text:
      'A great user experience for Content creators, React components for Developers.',
    imageSource: {
      src:
        'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      srcSet: '',
      alt: 'Content creators',
      seoName: 'content-creators',
    },
  }),
  sideEditProps: [
    LayoutProp({ colors: [bgColors.white, bgColors.light, bgColors.darkBlue] }),
  ],
}

export default BigFeature
