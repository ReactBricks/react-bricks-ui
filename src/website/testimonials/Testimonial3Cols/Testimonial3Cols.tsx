import classNames from 'classnames'
import * as React from 'react'
import { Image, Plain, Repeater, Text, types } from 'react-bricks/frontend'

import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
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

const Testimonial3Cols: types.Brick<TestimonialProps> = ({
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
      <Container className="grid grid-cols-1 lg:grid-cols-3 gap-12 xl:gap-10">
        <Repeater propName="testimonials" />
      </Container>
    </Section>
  )
}

Testimonial3Cols.schema = {
  name: blockNames.Testimonial3Cols,
  label: 'Testimonial 3 cols',
  category: 'testimonials',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Testimonial/Testimonial.tsx',

  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE,
    borderTop: 'boxed',
    borderBottom: 'none',
    testimonials: [
      {
        quote:
          'React Bricks allowed us to quickly create a beautiful website that drives business goals and is easy to maintain.',
        authorName: 'Stefan Nagey',
        authorJobTitle: 'Senior Dir. Engineering @ Deel',
        avatarImage: {
          src: 'https://images.reactbricks.com/original/16068142-973d-49e7-b1a2-264c16bd5c34.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/16068142-973d-49e7-b1a2-264c16bd5c34.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/16068142-973d-49e7-b1a2-264c16bd5c34-100.webp 100w',
          alt: 'Stefan Nagey',
          seoName: 'stefan-nagey',
          fallbackSrc:
            'https://images.reactbricks.com/original/16068142-973d-49e7-b1a2-264c16bd5c34.png',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/16068142-973d-49e7-b1a2-264c16bd5c34-100.png 100w',
          fallbackType: 'image/jpeg',
          width: 100,
          height: 100,
        },
      },
      {
        quote:
          "I've wanted to see something like this for a long time. This is how web development was always supposed to be.",
        authorName: 'Laurie Voss',
        authorJobTitle: 'Data Analyst @ Netlify',
        avatarImage: {
          src: 'https://images.reactbricks.com/original/1f56e3f7-e1cf-4bfa-82d4-6a1a7415b954.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/1f56e3f7-e1cf-4bfa-82d4-6a1a7415b954.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/1f56e3f7-e1cf-4bfa-82d4-6a1a7415b954-96.webp 96w',
          alt: 'Laurie Voss',
          seoName: 'laurie-voss',
          fallbackSrc:
            'https://images.reactbricks.com/original/1f56e3f7-e1cf-4bfa-82d4-6a1a7415b954.jpg',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/1f56e3f7-e1cf-4bfa-82d4-6a1a7415b954-96.jpg 96w',
          fallbackType: 'image/jpeg',
          width: 96,
          height: 96,
        },
      },

      {
        quote:
          'The developer experience is great and our editors are happy as well! React Bricks fits perfectly to our needs.',
        authorName: 'Maik Jablonski',
        authorJobTitle: 'Managing Director @ Neoskop',
        avatarImage: {
          src: 'https://images.reactbricks.com/original/44e9d50a-95a1-4573-aafc-84a94496e319.webp',
          placeholderSrc:
            'https://images.reactbricks.com/placeholder/44e9d50a-95a1-4573-aafc-84a94496e319.jpg',
          srcSet:
            'https://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-450.webp 450w,\nhttps://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-400.webp 400w,\nhttps://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-200.webp 200w',
          alt: 'Matteo Frana',
          seoName: 'matteo-frana',
          fallbackSrc:
            'https://images.reactbricks.com/original/44e9d50a-95a1-4573-aafc-84a94496e319.jpg',
          fallbackSrcSet:
            'https://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-450.jpg 450w,\nhttps://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/44e9d50a-95a1-4573-aafc-84a94496e319-200.jpg 200w',
          fallbackType: 'image/jpeg',
          width: 450,
          height: 450,
        },
      },
    ],
  }),
  repeaterItems: [
    {
      name: 'testimonials',
      itemType: blockNames.Testimonial3ColsItem,
      itemLabel: 'Testimonial',
      min: 0,
      max: 3,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, ...sectionBordersEditProps],
    },
  ],
}

export default Testimonial3Cols
