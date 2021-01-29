import * as React from 'react'
import classNames from 'classnames'
import { Text, Image, Plain, types } from 'react-bricks'

import Section, { Border } from '../layout/Section'
import Container from '../layout/Container'
import { bgColors } from '../colors'
import { FiUser } from 'react-icons/fi'
import blockNames from '../blockNames'

export interface TestimonialProps {
  authorName: string
  authorJobTitle: string
  avatarImage: types.IImageSource
  logoImage: types.IImageSource
  small?: boolean
  borderTop?: Border
}

const Testimonial: types.Brick<TestimonialProps> = ({
  authorName,
  authorJobTitle,
  avatarImage,
  logoImage,
  small = false,
  borderTop = 'boxed',
}) => {
  return (
    <Section
      bg={bgColors.white.value}
      borderTop={borderTop}
      borderBottom="none"
    >
      <Container
        size="sm"
        className={classNames(
          'pt-12 pb-20 flex flex-col justify-between',
          small ? 'items-start' : 'items-center'
        )}
      >
        <Text
          renderBlock={(props: any) => (
            <div
              className={classNames(
                'flex-1 leading-relaxed text-center mb-6 text-gray-700 dark:text-gray-200',
                small ? 'text-md textt-left' : 'text-xl text-center'
              )}
            >
              “{props.children}”
            </div>
          )}
          placeholder="Quote..."
          propName="quote"
        />
        <div className="flex items-center">
          {avatarImage ? (
            <Image
              alt={Plain.serialize(authorName)}
              propName="avatarImage"
              imageClassName={classNames(
                'rounded-full',
                small ? 'w-8' : 'w-10'
              )}
            />
          ) : (
            <div
              className={classNames(
                'flex justify-center items-center rounded-full bg-gray-100 text-gray-500 text-xl',
                small ? 'w-8' : 'w-10'
              )}
            >
              <FiUser />
            </div>
          )}
          <div className="ml-3">
            <Text
              renderBlock={(props: any) => (
                <div className="text-sm font-bold">{props.children}</div>
              )}
              placeholder="Author name..."
              propName="authorName"
            />
            <Text
              renderBlock={(props: any) => (
                <div className="text-xs">{props.children}</div>
              )}
              placeholder="Job title..."
              propName="authorJobTitle"
            />
          </div>
          {logoImage && (
            <div className="ml-5 pl-5 border-l border-gray-300">
              <Image
                alt={Plain.serialize(authorJobTitle)}
                propName="logoImage"
                imageClassName="h-6"
              />
            </div>
          )}
        </div>
      </Container>
    </Section>
  )
}

Testimonial.schema = {
  name: blockNames.Testimonial,
  label: 'Testimonial',
  getDefaultProps: () => ({
    quote: Plain.deserialize("F2.net is a skilled company who helped us define our production management application requirements and implemented it as a beautiful system that our users love. We are very satisfied."),
    authorName: Plain.deserialize("Matteo Frana"),
    authorJobTitle: Plain.deserialize("Founder @ React Bricks"),
    avatarImage: {
      src: "https://images.reactbricks.com/original/4a14877f-223a-4988-8279-6d2940885ce4.jpg",
      placeholderSrc: "https://images.reactbricks.com/placeholder/4a14877f-223a-4988-8279-6d2940885ce4.jpg",
      srcSet: "https://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-200.jpg 200w",
      alt: "Matteo",
      seoName: "matteo"
    },
    logoImage: {
      src: "https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg",
      placeholderSrc: "https://images.reactbricks.com/original/dc2b9d0b-9a49-4674-bc88-fdd8fbf357ae.svg",
      srcSet: "",
      alt: "React Bricks",
      seoName: "react-bricks"
    }
  }),
}

export default Testimonial
