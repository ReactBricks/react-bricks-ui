import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { bgColors, textColors } from '../../colors'
import Section, { Border } from '../../shared/layout/Section'
import Container from '../../shared/layout/Container'
import blockNames from '../../blockNames'
import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'

export interface FeatureCalloutProps {
  backgroundColor?: { color: string; className: string }
  borderTop: Border
  borderBottom: Border
}

const FeatureCallout: types.Brick<FeatureCalloutProps> = ({
  backgroundColor = bgColors.WHITE.value,
  borderTop,
  borderBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop="small"
        paddingBottom="small"
        className={classNames(
          'flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="sm:mr-10 mb-4 sm:mb-0">
          <Image
            propName="imageSource"
            alt="image"
            imageClassName="w-36 h-36 object-contain"
          />
        </div>
        <div className="flex-1">
          <Text
            propName="title"
            renderBlock={(props) => (
              <div
                className={classNames(
                  'font-extrabold text-xl leading-6 mb-1',
                  textColors.GRAY_900
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
            renderBlock={(props) => (
              <span
                className={classNames('leading-6', textColors.GRAY_700)}
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

FeatureCallout.schema = {
  name: blockNames.FeatureCallout,
  label: 'Feature callout',
  category: 'content sections',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/FeatureCallout/FeatureCallout.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE.value,
    borderTop: 'boxed',
    borderBottom: 'none',
    title: 'Easy like Wix, but your own.',
    text: 'A great user experience for Content creators, React components for Developers.',
    imageSource: {
      src: 'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/b3dc173e-fcb1-4aab-8a7a-1638386915f7.svg',
      srcSet: '',
      alt: 'Content creators',
      seoName: 'content-creators',
    },
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, ...sectionBordersEditProps],
    },
  ],
}

export default FeatureCallout
