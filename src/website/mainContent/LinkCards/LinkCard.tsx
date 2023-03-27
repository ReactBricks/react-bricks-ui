import classNames from 'classnames'
import React from 'react'
import { types } from 'react-bricks/frontend'
import { Text, Image, Link } from 'react-bricks/frontend'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { icons } from '../../shared/defaultImages'

interface LinkCardProps {
  withIcon: boolean
  withTitle: boolean
  withLink: boolean
  linkText: any
  linkPath: string
}

const LinkCard: types.Brick<LinkCardProps> = ({
  withIcon,
  withTitle,
  linkPath,
}) => {
  return (
    <div>
      <Link
        propName="link"
        href={linkPath}
        className={classNames(
          'flex items-center border border-black/10 dark:border-white/10 bg-white dark:bg-white/10 p-5 rounded group hover:-translate-y-[3px] hover:border-sky-500/50 hover:shadow-lg hover:text-sky-600 transition-all ease-out duration-150',
          textColors.GRAY_800
        )}
      >
        {withIcon && (
          <Image
            propName="icon"
            alt="logo"
            imageClassName={`w-10 h-10 object-contain ml-0.5 mr-4`}
          />
        )}

        <div className="w-full">
          {withTitle && (
            <Text
              renderBlock={(props) => (
                <div className="font-bold">{props.children}</div>
              )}
              placeholder="Title..."
              propName="title"
            />
          )}

          <Text
            renderBlock={(props) => <div>{props.children}</div>}
            placeholder="Text..."
            propName="text"
          />
        </div>
      </Link>
    </div>
  )
}

LinkCard.schema = {
  name: blockNames.LinkCard,
  label: 'Card',
  category: 'main content',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    withIcon: true,
    withTitle: true,
    icon: icons.PHOTO_STACK,
    title: 'Visual editing',
    text: 'The best UX on the market, no training required.',
    linkPath: '/',
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
      name: 'linkPath',
      label: 'Link to',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default LinkCard
