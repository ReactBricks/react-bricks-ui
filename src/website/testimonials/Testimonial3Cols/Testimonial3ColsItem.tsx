import classNames from 'classnames'
import * as React from 'react'
import { Image, Plain, Text, types } from 'react-bricks/frontend'

import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import Container from '../shared/layout/Container'
import Section, { Border } from '../shared/layout/Section'

export interface TestimonialProps {
  authorName: any
  authorJobTitle: any
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  backgroundColor?: { color: string; className: string }
  borderTop: Border
  borderBottom: Border
  small: boolean
}

const Testimonial3ColsItem: types.Brick<TestimonialProps> = ({
  authorName,
}) => {
  return (
    <div>
      <Text
        renderBlock={(props) => (
          <blockquote className={`leading-7 mb-5 ${textColors.GRAY_700}`}>
            {props.children}
          </blockquote>
        )}
        placeholder="Quote..."
        renderPlaceholder={(props) => {
          return <span>{props.children}</span>
        }}
        propName="quote"
      />
      <cite className="flex items-center not-italic">
        <Image
          alt={Plain.serialize(authorName)}
          propName="avatarImage"
          aspectRatio={1}
          imageClassName="rounded-full w-10 h-10 object-contain"
        />

        <div className="ml-3 dark:text-gray-200 min-w-[90px]">
          <Text
            renderBlock={(props) => (
              <div className={`text-sm font-extrabold ${textColors.GRAY_800}`}>
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
      </cite>
    </div>
  )
}

Testimonial3ColsItem.schema = {
  name: blockNames.Testimonial3ColsItem,
  label: 'Single Testimonial',
  category: 'testimonials',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    quote:
      'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain. No one from the marketing team would ever go back!',
    authorName: 'Matteo Frana',
    authorJobTitle: 'Founder @ React Bricks',
    avatarImage: {
      src: 'https://images.reactbricks.com/original/910d4267-6e46-4d9e-8790-53348ede99fb.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/910d4267-6e46-4d9e-8790-53348ede99fb.svg',
      srcSet: '',
      alt: 'Matteo Frana',
      seoName: 'matteo-frana',
    },
  }),
}

export default Testimonial3ColsItem
