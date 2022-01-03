import React from 'react'
import {
  Image,
  RichTextExt,
  Text,
  types,
  useAdminContext,
  plugins,
} from 'react-bricks/frontend'
import { FaTwitter } from 'react-icons/fa'
import Section from '../layout/Section'
import blockNames from '../blockNames'
import dayjs from 'dayjs'

export interface TweetLightProps {
  tweetLink: string
  authorLink: string
}

const TweetLight: types.Brick<TweetLightProps> = ({
  tweetLink,
  authorLink,
}) => {
  const { isAdmin } = useAdminContext()
  const handleClick = (tweetLink: string) => (event: React.MouseEvent) => {
    console.log({ isAdmin })
    if (isAdmin) {
      return event.preventDefault()
    }
    if (typeof window !== undefined) {
      window.open(tweetLink)
    }
  }
  return (
    <Section>
      <div className="mx-auto max-w-lg px-6">
        <div
          onClick={handleClick(tweetLink)}
          className="block font-sans p-4 bg-white hover:bg-gray-50 border dark:bg-twitter-dark border-gray-300 dark:border-twitter-dark-border hover:shadow-lg transition-shadow duration-200 rounded-xl"
        >
          <div className="flex items-start justify-between mb-3">
            <a
              href={authorLink}
              rel="noopener noreferrer"
              target="_blank"
              className="flex items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mr-2 w-12 h-12">
                <Image
                  propName="author"
                  alt="athor-name"
                  imageClassName="rounded-full filter hover:brightness-90"
                />
              </div>
              <div className="group">
                <Text
                  propName="authorName"
                  placeholder="Author Name"
                  renderBlock={({ children }) => (
                    <div className="text-md text-gray-900 font-bold leading-tight group-hover:underline dark:text-twitter-50">
                      {children}
                    </div>
                  )}
                />
                <Text
                  propName="authorTwitterHandle"
                  placeholder="Author @"
                  renderBlock={({ children }) => (
                    <div className="text-sm text-gray-500 font-medium tracking-tight">
                      {children}
                    </div>
                  )}
                />
              </div>
            </a>
            <div className="text-twitter-500 text-2xl dark:text-twitter-50">
              <FaTwitter />
            </div>
          </div>
          <RichTextExt
            propName="tweetContent"
            placeholder="tweet content"
            renderBlock={({ children }) => (
              <div className="mb-2 text-xl font-medium leading-tight dark:text-twitter-50">
                {children}
              </div>
            )}
            plugins={[
              {
                ...plugins.link,
                renderElement: ({ attributes, children }) => (
                  <span
                    {...attributes}
                    className="text-twitter-500 hover:text-twitter-600"
                  >
                    {children}
                  </span>
                ),
                label: 'Twitter profile link',
                button: {
                  isActive: plugins.link.button!.isActive,
                  icon: <FaTwitter />,
                },
              },
            ]}
          />

          <Text
            propName="date"
            placeholder="Date"
            renderBlock={({ children }) => (
              <div className="inline-block font-normal text-gray-500 tracking-tight hover:underline">
                {children}
              </div>
            )}
          />
        </div>
      </div>
    </Section>
  )
}

TweetLight.schema = {
  name: blockNames.TweetLight,
  label: 'Tweet light',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Tweet/TweetLight.tsx',
  getDefaultProps: () => ({
    authorName: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'John Doe',
          },
        ],
      },
    ],
    author: {
      src: 'https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/b21a4d81-5354-48b5-88bf-89dc9ed6f302.svg',
      srcSet: '',
      width: 1249.24,
      height: 1249.24,
      alt: 'Author name',
      seoName: 'author',
    },
    tweetLink: 'https://twitter.com/matfrana/status/1237840583982329857',
    authorLink: '',
    authorTwitterHandle: [
      {
        type: 'paragraph',
        children: [
          {
            text: '@JohnDoe',
          },
        ],
      },
    ],
    tweetContent: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet',
          },
        ],
      },
    ],
    date: [
      {
        type: 'paragraph',
        children: [
          {
            text: dayjs().format('H:mm · MMM DD, YYYY'),
          },
        ],
      },
    ],
  }),
  sideEditProps: [
    {
      name: 'helper',
      label: 'Why Tweet light?',
      type: types.SideEditPropType.Custom,
      component: () => (
        <div className="text-sm">
          This is a light version of the Tweet content block: it doesn't load
          the Twitter JavaScript, so it is much better performance-wise, but it
          requires manually entering the Tweet content and properties.
        </div>
      ),
    },
    {
      name: 'tweetLink',
      label: 'Tweet Link',
      type: types.SideEditPropType.Text,
    },
    {
      name: 'authorLink',
      label: 'Author Link',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default TweetLight
