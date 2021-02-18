import * as React from 'react'
import { Image, types, Text, Plain, RichText } from 'react-bricks'
import classNames from 'classnames'
import blockNames from '../blockNames'

export type layoutType = 'base' | 'small' | 'small-3cols'

const getFontSize = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'text-lg md:text-xl md:leading-5 leading-5 text-gray-700 dark:text-gray-300 font-extrabold mb-2'
    default:
      return ' text-base leading-5 text-gray-700 dark:text-gray-400 font-extrabold mb-2'
  }
}

export interface FeatureItemProps {
  screenLayout: layoutType
}

const screen = (screenLayout: layoutType) => {
  switch (screenLayout) {
    case 'base':
      return 'md:w-80'
    case 'small':
      return 'md:w-72 -mx-2'
    case 'small-3cols':
      return ''
    default:
      return 'w-64'
  }
}
const FeatureItem: types.Brick<FeatureItemProps> = ({
  screenLayout,
  ...rest
}) => {
  return (
    <div className={`flex md:flex-col ${screen(screenLayout)} mb-16`} {...rest}>
      <Image
        propName="image"
        alt="feature"
        imageClassName={
          screenLayout === 'base'
            ? 'w-24 md:w-auto h-auto md:h-24'
            : 'w-12 h-12'
        }
        containerClassName="my-auto mr-6 md:mr-0 md:mb-5"
      />

      <div className="flex-1">
        <Text
          propName="title"
          placeholder="title..."
          renderBlock={(props: any) => (
            <h3 className={classNames(getFontSize(screenLayout))}>
              {props.children}
            </h3>
          )}
        />
        <RichText
          propName="text"
          placeholder="text..."
          renderBlock={(props: any) => (
            <p className="text-gray-500 dark:text-gray-200 font-normal leading-6 text-base text">
              {props.children}
            </p>
          )}
        />
      </div>
    </div>
  )
}
FeatureItem.schema = {
  name: blockNames.FeatureItem,
  label: 'Feature items',
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    title: Plain.deserialize('Front-end development'),
    text: Plain.deserialize(
      'We are specialized in the development of React web applications. For public websites we use Next.js or Gatbsy, based on the type of project.'
    ),
    screenLayout: 'base',
    image: {
      src:
        'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/193ab040-1fc7-47b5-8ca0-c2176be578a6.svg',
      srcSet: '',
    },
  }),
}

export default FeatureItem
