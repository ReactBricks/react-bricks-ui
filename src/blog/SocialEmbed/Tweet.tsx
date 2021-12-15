import React from 'react'
import {
  Image,
  RichTextExt,
  Text,
  types,
  useAdminContext,
  plugins,
} from 'react-bricks'
import { FaTwitter } from 'react-icons/fa'
import blockNames from '../blockNames'

interface TweetProps {
  tweetLink: string
  authorLink: string
}

const Tweet: types.Brick<TweetProps> = ({ tweetLink, authorLink }) => {
  const { isAdmin } = useAdminContext()
  const handleClick = (tweetLink: string) => (event: React.MouseEvent) => {
    if (isAdmin) {
      return event.preventDefault()
    }
    if (typeof window !== undefined) {
      window.open(tweetLink)
    }
  }
  return (
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
            onClick={e => e.stopPropagation()}
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
                  <div className="text-md font-bold leading-tight group-hover:underline dark:text-twitter-50">
                    {children}
                  </div>
                )}
              />

              <Text
                propName="authorAt"
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
              renderLeaf: ({ attributes, children }) => (
                <span
                  {...attributes}
                  className="text-twitter-500 hover:text-twitter-600"
                >
                  {children}
                </span>
              ),

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
  )
}

Tweet.schema = {
  name: blockNames.Tweet,
  label: 'Tweet',
  getDefaultProps: () => ({}),
  sideEditProps: [
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

export default Tweet
