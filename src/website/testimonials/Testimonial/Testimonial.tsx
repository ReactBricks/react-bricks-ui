import classNames from 'classnames'
import * as React from 'react'
import { Image, Plain, Text, types } from 'react-bricks/frontend'

import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
import { avatars, iconLogos } from 'website/shared/defaultImages'
import blockNames from '../../blockNames'
import { bgColors, textColors } from '../../colors'
import Container from '../../shared/layout/Container'
import Section, { Border } from '../../shared/layout/Section'

export interface TestimonialProps {
  authorName: any
  authorJobTitle: any
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  backgroundColor?: { color: string; className: string }
  borderTop: Border
  borderBottom: Border
}

const Testimonial: types.Brick<TestimonialProps> = ({
  authorName,
  authorJobTitle,
  backgroundColor,
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
        className="flex flex-col justify-center items-center pb-20"
      >
        <Text
          renderBlock={(props) => (
            <blockquote
              className={`text-xl leading-8 text-center mb-6 max-w-[480px] ${textColors.GRAY_700}`}
            >
              {props.children}
            </blockquote>
          )}
          placeholder="Quote..."
          renderPlaceholder={(props) => {
            return <span>{props.children}</span>
          }}
          propName="quote"
        />
        <cite className="flex items-center justify-center not-italic">
          <Image
            alt={Plain.serialize(authorName)}
            propName="avatarImage"
            aspectRatio={1}
            imageClassName="rounded-full w-10 h-10 object-contain"
          />

          <div className="ml-3 dark:text-gray-200 min-w-[90px]">
            <Text
              renderBlock={(props) => (
                <div
                  className={`text-sm font-extrabold ${textColors.GRAY_800}`}
                >
                  {props.children}
                </div>
              )}
              placeholder="Name..."
              propName="authorName"
            />
            <Text
              renderBlock={(props) => (
                <div className={`text-xs ${textColors.GRAY_600}`}>
                  {props.children}
                </div>
              )}
              placeholder="Job title..."
              propName="authorJobTitle"
            />
          </div>

          <Image
            alt={Plain.serialize(authorJobTitle)}
            propName="logoImage"
            imageClassName="w-20 h-10 object-contain object-left"
            renderWrapper={({ children }) => (
              <div className="ml-5 pl-5 border-l border-gray-300">
                {children}
              </div>
            )}
          />
        </cite>
      </Container>
    </Section>
  )
}

Testimonial.schema = {
  name: blockNames.Testimonial,
  label: 'Testimonial',
  category: 'testimonials',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE,
    borderTop: 'boxed',
    borderBottom: 'none',
    quote:
      'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain. No one from the marketing team would ever go back!',
    authorName: 'Matteo Frana',
    authorJobTitle: 'Founder @ React Bricks',
    avatarImage: avatars.MATTEO_FRANA,
    logoImage: iconLogos.REACT_BRICKS,
  }),
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, ...sectionBordersEditProps],
    },
  ],
}

export default Testimonial
