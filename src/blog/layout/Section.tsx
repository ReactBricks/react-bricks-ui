import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../../website/colors'

export interface SectionProps {
  bg?: { color: string; className: string }
  children?: React.ReactNode
}
const Section: React.FC<SectionProps> = ({
  bg = bgColors.white.value,
  children,
}) => {
  const bgColor = bg.className
  return (
    <section className={classNames(bgColor, 'py-5 font-content')}>
      {children}
    </section>
  )
}
export default Section
