import * as React from 'react'
import classNames from 'classnames'

export type Size = 'normal' | 'small' | 'full'

export interface ContainerProps {
  size?: Size
  className?: string
  children?: React.ReactNode
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

const Container: React.FC<ContainerProps> = ({
  size = 'normal',
  className,
  children,
}) => {
  return (
    <div className={classNames(getWidthClass(size), className)}>{children}</div>
  )
}

export default Container
