import classNames from 'classnames'
import dayjs from 'dayjs'
import React from 'react'
import { Text, types, usePageValues } from 'react-bricks/frontend'
import { bgColors } from '../../website/colors'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'
import DefaultAvatar from './DefaultAvatar'

export interface TitleProps {
  size?: 'medium' | 'large'
  bg?: { color: string; className: string }
}

const Title: types.Brick<TitleProps> = ({
  size = 'large',
  bg = bgColors.white.value,
}) => {
  const [pageValues] = usePageValues()
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

        <div className="flex items-center space-x-2">
          {pageValues.author.avatarUrl ? (
            <img
              src={pageValues.author.avatarUrl}
              alt="Author"
              className="rounded-full w-12"
            />
          ) : (
            <DefaultAvatar className="rounded-full w-12" />
          )}
          <div className="text-gray-700 dark:text-gray-200">
            {pageValues.author.firstName || 'John'}{' '}
            {pageValues.author.lastName || 'Doe'} •{' '}
            {dayjs(pageValues.publishedAt || new Date()).format(
              'MMMM DD, YYYY'
            )}
          </div>

          {/* If you want the author to be editable instead of the author from react Bricks, uncomment below */}
          {/* <Image
            propName="authorImage"
            alt="Author name"
            imageClassName="rounded-full w-12"
          /> */}

          {/* <Text
            propName="author"
            renderBlock={prop => {
              return (
                <div className="text-gray-700 dark:text-gray-200">
                  {prop.children}
                </div>
              )
            }}
            placeholder="Type an author..."
          /> */}
        </div>
      </Container>
    </Section>
  )
}
Title.schema = {
  name: blockNames.Title,
  label: 'Title',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Title/index.tsx',
  getDefaultProps: () => ({
    title: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'This is the Blog title',
          },
        ],
      },
    ],
  }),
}
export default Title
