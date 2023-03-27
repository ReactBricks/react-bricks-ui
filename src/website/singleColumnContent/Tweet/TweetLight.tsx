import React, { useState } from 'react'
import {
  Image,
  Text,
  types,
  useAdminContext,
  RichText,
  Link,
} from 'react-bricks/frontend'
import { FaTwitter } from 'react-icons/fa'
import Section from '../../shared/components/Section'
import blockNames from '../../blockNames'
import Container from '../../shared/components/Container'
import {
  containerWidthSideGroup,
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../../LayoutSideProps'

export interface TweetLightProps extends LayoutProps {
  tweetLink: string
  authorLink: string
}

const TweetLight: types.Brick<TweetLightProps> = ({
  tweetLink,
  authorLink,
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  width,
}) => {
  const { isAdmin, previewMode } = useAdminContext()
  const [isMouseOver, setIsMouseOver] = useState(false)

  const handleClick = (tweetLink: string) => (event: React.MouseEvent) => {
    if (isAdmin && !previewMode) {
      return event.preventDefault()
    }
    if (typeof window !== undefined) {
      window.open(tweetLink)
    }
  }

  return (
    <Section
      backgroundColor={backgroundColor}
      borderTop={borderTop}
      borderBottom={borderBottom}
    >
      <Container
        size={width}
        paddingTop={paddingTop}
        paddingBottom={paddingBottom}
      >
        <div className="mx-auto max-w-lg px-6">
          <div
            onClick={handleClick(tweetLink)}
            className="block font-sans p-4 bg-white hover:bg-gray-50 border dark:bg-black border-gray-300 dark:border-gray-800 hover:shadow-lg transition-shadow duration-200 rounded-xl"
            style={{
              fontFamily:
                'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <Link
                href={authorLink}
                rel="noopener noreferrer"
                target="_blank"
                className="flex items-center"
                onClick={(event: React.MouseEvent) => event.stopPropagation()}
              >
                <div className="mr-2 w-12 h-12">
                  <Image
                    propName="author"
                    alt="author-name"
                    imageClassName="rounded-full filter hover:brightness-90"
                  />
                </div>
                <div className="group">
                  <Text
                    propName="authorName"
                    placeholder="Author Name"
                    renderBlock={({ children }) => (
                      <div className="text-md text-gray-900 font-bold leading-tight group-hover:underline dark:text-neutral-300">
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
              </Link>
              <div
                className="text-2xl dark:text-neutral-300"
                style={{ color: '#1d9bf0' }}
              >
                <FaTwitter />
              </div>
            </div>
            <RichText
              propName="tweetContent"
              placeholder="tweet content"
              renderBlock={({ children }) => (
                <div className="mb-2 text-xl font-medium leading-tight dark:text-neutral-300">
                  {children}
                </div>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href, attributes }) => (
                <Link
                  {...attributes}
                  href={href}
                  onClick={(event: React.MouseEvent) => event.stopPropagation()}
                  className="hover:text-sky-600"
                  onMouseEnter={() => setIsMouseOver(true)}
                  onMouseLeave={() => setIsMouseOver(false)}
                  style={{ color: isMouseOver ? '#1a8cd8' : '#1d9bf0' }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </Link>
              )}
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
      </Container>
    </Section>
  )
}

TweetLight.schema = {
  name: blockNames.TweetLight,
  label: 'Tweet light',
  category: 'single column / blog',
  tags: ['tweet', 'twitter', 'light'],
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/blog/Tweet/TweetLight.tsx',
  getDefaultProps: () => ({
    ...sectionDefaults,
    width: 'small',
    authorName: 'John Doe',
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
    authorLink: 'https://twitter.com/matfrana',
    authorTwitterHandle: '@JohnDoe',
    tweetContent: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'Lorem ipsum dolor sit amet ',
          },
          {
            type: 'link',
            url: 'https://twitter.com/ReactBricks',
            children: [
              {
                text: '@ReactBricks',
              },
            ],
          },
          {
            text: '',
          },
        ],
      },
    ],
    date: '10:18 · Jan 04, 2022',
  }),
  sideEditProps: [
    {
      groupName: 'Tweet',
      props: [
        {
          name: 'helper',
          label: 'Why Tweet light?',
          type: types.SideEditPropType.Custom,
          component: () => (
            <div className="text-sm">
              This is a light version of the Tweet content block: it doesn't
              load the Twitter JavaScript, so it is much better
              performance-wise, but it requires manually entering the Tweet
              content and properties.
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
    },
    neutralBackgroundSideGroup,
    paddingBordersSideGroup,
    containerWidthSideGroup,
  ],
}

export default TweetLight
