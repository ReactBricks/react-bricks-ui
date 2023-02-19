import classNames from 'classnames'
import * as React from 'react'
import { Image, Plain, Repeater, Text, types } from 'react-bricks/frontend'

import {
  backgroundColorsEditProps,
  sectionBordersEditProps,
} from 'website/LayoutSideProps'
import { avatars } from 'website/shared/defaultImages'
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
        avatarImage: avatars.STEFAN_NAGEY,
      },
      {
        quote:
          "I've wanted to see something like this for a long time. This is how web development was always supposed to be.",
        authorName: 'Laurie Voss',
        authorJobTitle: 'Data Analyst @ Netlify',
        avatarImage: avatars.LAURIE_VOSS,
      },
      {
        quote:
          'The developer experience is great and our editors are happy as well! React Bricks fits perfectly to our needs.',
        authorName: 'Maik Jablonski',
        authorJobTitle: 'Managing Director @ Neoskop',
        avatarImage: avatars.MAIK_JABLONSKI,
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
