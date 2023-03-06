import * as React from 'react'
import classNames from 'classnames'

export type Size = 'medium' | 'small' | 'full'
export type Padding = '0' | '6' | '8' | '10' | '12' | '16' | '20'

const getPaddingTopClass = (padding: Padding): string => {
  switch (padding) {
    case '20':
      return 'pt-12 lg:pt-20'
    case '16':
      return 'pt-12 lg:pt-16'
    case '12':
      return 'pt-12'
    case '10':
      return 'pt-10'
    case '8':
      return 'pt-8'
    case '6':
      return 'pt-6'
    case '0':
      return 'pt-0'
    default:
      return 'pt-0'
  }
}

const getPaddingBottomClass = (padding: Padding): string => {
  switch (padding) {
    case '20':
      return 'pb-12 lg:pb-20'
    case '16':
      return 'pb-12 lg:pb-16'
    case '12':
      return 'pb-12'
    case '10':
      return 'pb-10'
    case '8':
      return 'pb-8'
    case '6':
      return 'pb-6'
    case '0':
      return 'pb-0'
    default:
      return 'pb-0'
  }
}

const getWidthClass = (size: Size) => {
  switch (size) {
    case 'medium': {
      return 'px-5 sm:mx-[5.55555%] xl:mx-[11.1111%]'
    }
    case 'small': {
      return 'px-5 sm:mx-[16.66666%] xl:mx-[22.2222%]'
    }
    case 'full': {
      return ''
    }
  }
}

export interface ContainerProps {
  size?: Size
  paddingTop?: Padding
  paddingBottom?: Padding
  className?: string
  children?: React.ReactNode
}

const Container: React.FC<ContainerProps> = ({
  size = 'medium',
  paddingTop = '16',
  paddingBottom = '16',
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        getWidthClass(size),
        getPaddingTopClass(paddingTop),
        getPaddingBottomClass(paddingBottom),
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
