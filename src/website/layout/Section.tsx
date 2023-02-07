import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../colors'
import { types } from 'react-bricks'

export type Border = 'none' | 'full' | 'boxed'
export type Padding = 'normal' | 'small' | 'thin' | 'none'

const getPaddingTopClass = (padding: Padding): string => {
  switch (padding) {
    case 'normal':
      return 'pt-12 lg:pt-20'
    case 'small':
      return 'pt-12'
    case 'thin':
      return 'pt-6'
    case 'none':
      return 'pt-0'
    default:
      return 'pt-0'
  }
}

const getPaddingBottomClass = (padding: Padding): string => {
  switch (padding) {
    case 'normal':
      return 'pb-12 lg:pb-20'
    case 'small':
      return 'pb-12'
    case 'thin':
      return 'pb-6'
    case 'none':
      return 'pb-0'
    default:
      return 'pb-0'
  }
}

interface HRProps {
  boxed?: boolean
}

const HR: React.FC<HRProps> = ({ boxed = false }) => {
  if (boxed) {
    return (
      <div className="sm:w-11/12 xl:w-9/12 mx-auto px-6 md:px-12">
        <hr className="border-gray-900 border-opacity-10 dark:border-gray-700" />
      </div>
    )
  }
  return (
    <hr className="border-gray-900 border-opacity-10 dark:border-gray-700" />
  )
}

interface SectionProps {
  bg?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  paddingTop?: Padding
  paddingBottom?: Padding
  className?: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  bg = bgColors.WHITE.value,
  backgroundImage,
  borderTop = 'none',
  borderBottom = 'none',
  paddingTop = 'normal',
  paddingBottom = 'normal',
  className = '',
  children,
}) => {
  const bgColor = bg.className
  console.log('img', backgroundImage?.fallbackSrc)

  const backgroundImageStyle = backgroundImage
    ? {
        backgroundImage: `url(${
          backgroundImage.src
        })`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      className={classNames(
        bgColor,
        className,
        'overflow-hidden',
        getPaddingTopClass(paddingTop),
        getPaddingBottomClass(paddingBottom)
      )}
      style={backgroundImageStyle}
    >
      {borderTop !== 'none' && <HR boxed={borderTop === 'boxed'} />}
      {children}
      {borderBottom !== 'none' && <HR boxed={borderBottom === 'boxed'} />}
    </section>
  )
}

export default Section
