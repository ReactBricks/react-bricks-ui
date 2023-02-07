import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { bgColors, textColors } from '../colors'
import Section, { Border } from '../layout/Section'
import Container from '../layout/Container'
import blockNames from '../blockNames'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'

export interface FeatureCalloutProps {
  bg?: { color: string; className: string }
}

const FeatureCallout: types.Brick<FeatureCalloutProps> = ({
  bg = bgColors.WHITE.value,
}) => {
  return (
    <Section bg={bg}>
      <Container
        size="small"
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
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/FeatureCallout/FeatureCallout.tsx',

  getDefaultProps: () => ({
    bg: bgColors.WHITE.value,
    borderTop: 'boxed',
    borderBottom: 'none',
    width: 'sm',
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
      props: [BackgroundColorsSideEditProps],
    },
  ],
}

export default FeatureCallout
