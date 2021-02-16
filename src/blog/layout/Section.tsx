import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../../website/colors'

interface SectionProps {
  bg?: { color: string; className: string }
}
const Section: React.FC<SectionProps> = ({
  bg = bgColors.white.value,
  children,
}) => {
  const bgColor = bg.className
  return (
    <section className={classNames(bgColor, 'py-5 font-blog')}>
      {children}
    </section>
  )
}
export default Section
