import * as React from 'react'
import classNames from 'classnames'

export type Size = 'lg' | 'md' | 'sm' | 'full'

interface ContainerProps {
  size?: Size
  className?: string
}

const getWidthClass = (size: Size) => {
  switch (size) {
    case 'lg': {
      return 'sm:mx-sm xl:mx-md xxl:mx-lg'
    }
    case 'md': {
      return 'sm:mx-sm lg:mx-md xl:mx-lg xxl:mx-xl'
    }
    case 'sm': {
      return 'sm:mx-lg lg:mx-xl'
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
