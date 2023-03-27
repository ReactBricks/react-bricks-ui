import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, Image, types } from 'react-bricks/frontend'

import { textColors } from '../../colors'
import Section from '../../shared/components/Section'
import Container from '../../shared/components/Container'
import blockNames from '../../blockNames'
import {
  backgroundSideGroup,
  LayoutProps,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'
import { icons } from '../../shared/defaultImages'

export interface FeatureCalloutProps extends LayoutProps {}

const FeatureCallout: types.Brick<FeatureCalloutProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
}) => {
  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size="small"
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
        className={classNames(
          'flex flex-col sm:flex-row items-center text-center sm:text-left'
        )}
      >
        <div className="sm:mr-10 mb-4 sm:mb-0">
          <Image
            propName="image"
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
  category: 'main content',
  tags: ['feature', 'single feature', 'highlight'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/FeatureCallout/FeatureCallout.tsx',

  getDefaultProps: () => ({
    ...sectionDefaults,
    borderTop: 'boxed',
    paddingTop: '12',
    paddingBottom: '12',
    title: 'Easy like Wix, but your own.',
    text: 'A great user experience for Content creators, React components for Developers.',
    image: icons.PHOTOS,
  }),
  sideEditProps: [backgroundSideGroup, paddingBordersSideGroup],
}

export default FeatureCallout
