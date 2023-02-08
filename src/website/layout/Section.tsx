import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../colors'
import { types } from 'react-bricks'
import Container from './Container'

export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  children,
}) => {
  const bgColor = backgroundColor.className

  const backgroundImageStyle = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage.src})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    : {}

  return (
    <section
      className={classNames(bgColor, className, 'overflow-hidden')}
      style={backgroundImageStyle}
    >
      {borderTop !== 'none' && (
        <Container
          size={borderTop === 'boxed' ? 'normal' : 'full'}
          paddingBottom="none"
          paddingTop="none"
        >
          <hr className="border-black/10" />
        </Container>
      )}
      {children}
      {borderBottom !== 'none' && (
        <Container
          size={borderBottom === 'boxed' ? 'normal' : 'full'}
          paddingBottom="none"
          paddingTop="none"
        >
          <hr className="border-black/10" />
        </Container>
      )}
    </section>
  )
}

export default Section
