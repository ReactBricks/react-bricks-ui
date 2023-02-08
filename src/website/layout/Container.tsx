import * as React from 'react'
import classNames from 'classnames'

export type Size = 'normal' | 'small' | 'full'
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

const getWidthClass = (size: Size) => {
  switch (size) {
    case 'normal': {
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
  size = 'normal',
  paddingTop = 'normal',
  paddingBottom = 'normal',
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
