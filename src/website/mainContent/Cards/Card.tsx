import classNames from 'classnames'
import React from 'react'
import { Plain, types } from 'react-bricks/frontend'
import { RichText, Text, Image, Link } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { icons } from '../../shared/defaultImages'

interface CardProps {
  withIcon: boolean
  withTitle: boolean
  withLink: boolean
  linkText: any
  linkPath: string
}

const Card: types.Brick<CardProps> = ({
  withIcon,
  withTitle,
  withLink,
  linkText,
  linkPath,
}) => {
  const linkTextPlain =
    typeof linkText === 'string' ? linkText : Plain.serialize(linkText)

  return (
    <div
      className={`p-7 flex border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 rounded`}
    >
      {withIcon && (
        <Image
          propName="icon"
          alt="logo"
          imageClassName={`text-left object-contain w-10 h-10 mr-5`}
        />
      )}

      <div className="w-full">
        {withTitle && (
          <Text
            renderBlock={(props) => (
              <div
                className={classNames('font-bold mb-1', textColors.GRAY_800)}
              >
                {props.children}
              </div>
            )}
            placeholder="Title..."
            propName="title"
          />
        )}
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
          placeholder="Description..."
          propName="description"
        />
        {withLink && (
          <div className="mt-2">
            <Link
              propName="link"
              href={linkPath}
              className={classNames(
                'cursor-pointer text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150',
                linkTextPlain ? 'flex items-center space-x-1' : ''
              )}
            >
              <div>
                <Text
                  renderBlock={(props) => <p>{props.children}</p>}
                  placeholder="Link..."
                  propName="linkText"
                />
              </div>
              <svg
                viewBox="0 0 14 14"
                width="14px"
                height="14px"
                className={classNames(
                  'w-[10px] h-[10px]',
                  linkTextPlain ? 'inline-block' : 'hidden'
                )}
              >
                <path
                  fill="currentColor"
                  d="m11.1 7.35-5.5 5.5a.5.5 0 0 1-.7-.7L10.04 7 4.9 1.85a.5.5 0 1 1 .7-.7l5.5 5.5c.2.2.2.5 0 .7Z"
                ></path>
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

Card.schema = {
  name: blockNames.Card,
  label: 'Card',
  category: 'main content',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    withIcon: true,
    withTitle: true,
    withLink: true,
    icon: icons.TWITTER,
    title: 'Twitter',
    description: 'Get the latest event updates about React Bricks.',
    linkText: 'Follow us now',
  }),
  sideEditProps: [
    {
      name: 'withIcon',
      label: 'With Icon',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withTitle',
      label: 'With Title',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withLink',
      label: 'With Link',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'linkPath',
      label: 'Link to',
      type: types.SideEditPropType.Text,
      show: ({ withLink }) => !!withLink,
    },
  ],
}

export default Card
