import React from 'react'
import classNames from 'classnames'
export interface ContainerProps {
  children?: React.ReactNode
  className?: string
}
const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div className={classNames('max-w-2xl mx-auto', className)}>{children}</div>
  )
}
export default Container
