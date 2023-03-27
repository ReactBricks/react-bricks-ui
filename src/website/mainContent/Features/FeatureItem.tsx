import * as React from 'react'
import { Image, types, Text, Link, Plain } from 'react-bricks/frontend'
import classNames from 'classnames'
import blockNames from '../../blockNames'
import { textColors } from '../../colors'
import { ColsNumber } from './Features'
import { icons } from '../../shared/defaultImages'

export interface FeatureItemProps {
  colsNumber: ColsNumber
  withIcon: boolean
  withLink: boolean
  linkText: any
  linkPath: string
}

const getColumnClass = (colsNumber: ColsNumber) => {
  switch (colsNumber) {
    case '2':
      return 'sm:flex-[0_1_45%] mb-12 sm:mb-16'
    case '3':
      return 'sm:flex-[0_1_27%] mb-12 sm:mb-16'
    case '4':
      return 'sm:flex-[0_1_45%] lg:flex-[0_1_20%] mb-12 sm:mb-16'
  }
}

const FeatureItem: types.Brick<FeatureItemProps> = ({
  colsNumber,
  withIcon,
  withLink,
  linkText,
  linkPath,
}) => {
  const linkTextPlain =
    typeof linkText === 'string' ? linkText : Plain.serialize(linkText)

  return (
    <div className={classNames('text-base', getColumnClass(colsNumber))}>
      {withIcon && (
        <Image
          propName="image"
          alt="feature"
          aspectRatio={1}
          imageClassName="block w-12 h-12 object-contain"
          renderWrapper={({ children }) => {
            return (
              <div className="float-left mr-5 mt-1 sm:float-none sm:mr-0 sm:mt-0 sm:mb-5">
                {children}
              </div>
            )
          }}
        />
      )}

      <div className="overflow-hidden">
        <Text
          propName="title"
          placeholder="Title..."
          renderBlock={(props) => (
            <div className={classNames('font-bold mb-1', textColors.GRAY_800)}>
              {props.children}
            </div>
          )}
        />
        <Text
          propName="text"
          placeholder="Title..."
          renderBlock={(props) => (
            <div className={textColors.GRAY_500}>{props.children}</div>
          )}
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
FeatureItem.schema = {
  name: blockNames.FeatureItem,
  label: 'Feature',
  category: 'main content',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Features/FeatureItem.tsx',

  getDefaultProps: () => ({
    title: 'The best experience for editors',
    text: 'Your marketing team hates gray forms. Give them the easiest UX.',
    withIcon: true,
    withLink: false,
    image: icons.PHOTO_STACK,
  }),
  sideEditProps: [
    {
      name: 'withIcon',
      label: 'With icon',
      type: types.SideEditPropType.Boolean,
    },
    {
      name: 'withLink',
      label: 'With link',
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

export default FeatureItem
