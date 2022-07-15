import * as React from 'react'
import classNames from 'classnames'

export type Size = 'lg' | 'md' | 'sm' | 'full'

export interface ContainerProps {
  size?: Size
  className?: string
  children?: React.ReactNode
}

const getWidthClass = (size: Size) => {
  switch (size) {
    case 'lg': {
      return 'sm:w-11/12 xl:w-3/4 2xl:w-2/3'
    }
    case 'md': {
      return 'sm:w-11/12 lg:w-3/4 xl:w-2/3 2xl:w-7/12'
    }
    case 'sm': {
      return 'sm:w-2/3 lg:w-7/12'
    }
    case 'full': {
      return ''
    }
  }
}

const Container: React.FC<ContainerProps> = ({
  size = 'lg',
  className,
  children,
}) => {
  return (
    <div
      className={classNames(
        'mx-auto',
        { 'px-5': size !== 'full' },
        getWidthClass(size),
        className
      )}
    >
      {children}
    </div>
  )
}

export default Container
