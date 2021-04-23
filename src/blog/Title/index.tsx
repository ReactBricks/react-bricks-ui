import React from 'react'
import { Image, Text, types } from 'react-bricks'
import classNames from 'classnames'
// import { FiTwitter } from 'react-icons/fi'

import Container from '../layout/Container'
import blockNames from '../blockNames'
import Section from '../layout/Section'
import { bgColors } from '../../website/colors'

export interface TitleProps {
  size?: 'medium' | 'large'
  bg?: { color: string; className: string }
}

const Title: types.Brick<TitleProps> = ({
  bg = bgColors.white.value,
  size = 'large',
}) => {
  return (
    <Section bg={bg}>
      <Container>
        <div
          className={classNames(
            'text-3xl',
            { 'sm:text-5xl': size === 'large' },
            { 'sm:text-4xl': size === 'medium' }
          )}
        >
          <Text
            propName="title"
            renderBlock={prop => {
              return (
                <h1
                  className={classNames(
                    'text-left font-normal text-gray-900 dark:text-gray-100 tracking-tight'
                  )}
                  style={{ lineHeight: '60px' }}
                >
                  {prop.children}
                </h1>
              )
            }}
            placeholder="Type a title..."
          />
        </div>
        <div className="flex justify-between mt-4">
          <div className="flex">
            <Image
              propName="authorImage"
              alt=""
              imageClassName={classNames('rounded-full', 'w-12', 'mr-2')}
            />
            <div className="flex flex-col">
              <Text
                propName="author"
                renderBlock={prop => {
                  return (
                    <div className="text-gray-400 dark:text-gray-200">
                      {prop.children}
                    </div>
                  )
                }}
                placeholder="Type an author..."
              />
              {/* <div className="flex text-gray-400 dark:text-gray-200">
                <div>data</div>
                <div>minuti da leggere</div>
              </div> */}
            </div>
          </div>
          {/* <button className=" items-end">
          <FiTwitter className=" w-7 h-7 text-gray-400 items-end" />
        </button> */}
        </div>
      </Container>
    </Section>
  )
}
Title.schema = {
  name: blockNames.Title,
  label: 'Blog title',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Title/index.tsx',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    title:
      'Open Sourcing the Netflix Domain Graph Service Framework: GraphQL for Spring Boot',
    author: 'Matteo Frana',
    authorImage: {
      src:
        'https://images.reactbricks.com/original/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      placeholderSrc:
        'https://images.reactbricks.com/placeholder/4a14877f-223a-4988-8279-6d2940885ce4.jpg',
      srcSet:
        'https://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-400.jpg 400w,\nhttps://images.reactbricks.com/src_set/4a14877f-223a-4988-8279-6d2940885ce4-200.jpg 200w',
      alt: 'Matteo',
      seoName: 'matteo',
    },
  }),
}
export default Title
