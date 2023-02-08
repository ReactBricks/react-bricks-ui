import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../../website/colors'

export interface SectionProps {
  backgroundColor?: { color: string; className: string }
  children?: React.ReactNode
}
const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  children,
}) => {
  const bgColor = backgroundColor.className
  return (
    <section className={classNames(bgColor, 'py-5 font-content')}>
      {children}
    </section>
  )
}
export default Section
