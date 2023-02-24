import classNames from 'classnames'
import React from 'react'
import { types } from 'react-bricks/frontend'
import { RichText, Text, Image, Link } from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import { textColors } from 'website/colors'

interface ThumbnailProps {
  withIcon: boolean
  withTitle: boolean
  withLink: boolean
  href: string
}

const Thumbnail: types.Brick<ThumbnailProps> = ({
  withIcon,
  withTitle,
  withLink,
  href,
}) => {
  return (
    <div className={`p-7 flex border border-slate-200 rounded`}>
      {withIcon ? (
        <Image
          propName="icon"
          alt="logo"
          imageClassName={`text-left object-contain w-10 h-10 mr-5`}
        />
      ) : null}

      <div className="w-full">
        {withTitle ? (
          <Text
            renderBlock={(props) => (
              <div
                className={classNames('font-bold mb-1', textColors.GRAY_800)}
              >
                {props.children}
              </div>
            )}
            placeholder="type a title..."
            propName="title"
          />
        ) : null}
        <RichText
          renderBlock={(props) => (
            <div
              className={classNames(
                'text-base font-normal',
                textColors.GRAY_600
              )}
            >
              {props.children}
            </div>
          )}
          placeholder="Role"
          propName="text"
        />
        <div className="w-full mt-2">
          {withLink ? (
            <Link
              propName="link"
              href={href}
              className="w-full cursor-pointer text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
            >
              <div className="flex-1">
                <Text
                  renderBlock={(props) => <span>{props.children}&raquo;</span>}
                  placeholder="type a link text..."
                  propName="linkText"
                />
              </div>
              {/* <svg
                viewBox="0 0 14 14"
                width="14px"
                height="14px"
                className="inline-block w-[10px] h-[10px]"
              >
                <path
                  fill="currentColor"
                  d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
                ></path>
              </svg> */}
            </Link>
          ) : null}
        </div>
      </div>
    </div>
  )
}

Thumbnail.schema = {
  name: blockNames.Thumbnail,
  label: 'Thumbnail',
  category: 'features',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    linkText: 'type a link text',
  }),
  sideEditProps: [
    {
      groupName: 'thumb',
      props: [
        {
          name: 'withIcon',
          label: 'With Icon',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'title',
      props: [
        {
          name: 'withTitle',
          label: 'With Title',
          type: types.SideEditPropType.Boolean,
        },
      ],
    },
    {
      groupName: 'link',
      props: [
        {
          name: 'withLink',
          label: 'With Link',
          type: types.SideEditPropType.Boolean,
        },
        {
          name: 'href',
          label: 'link',
          type: types.SideEditPropType.Text,
        },
      ],
    },
  ],
}

export default Thumbnail
