import * as React from 'react'
import classNames from 'classnames'
import { bgColors } from '../../colors'
import { types } from 'react-bricks'
import Container from './Container'

export type Border = 'full' | 'boxed' | 'none'

interface SectionProps {
  backgroundColor?: { color: string; className: string }
  backgroundImage?: types.IImageSource
  backgroundImageDark?: types.IImageSource
  borderTop?: Border
  borderBottom?: Border
  className?: string
  allowOverflow?: boolean
  children?: React.ReactNode
}

const Section: React.FC<SectionProps> = ({
  backgroundColor = bgColors.WHITE.value,
  backgroundImage,
  backgroundImageDark,
  borderTop = 'none',
  borderBottom = 'none',
  className = '',
  allowOverflow = false,
  children,
}) => {
  const bgColor = backgroundColor.className

  let backgroundImageCss = `
      ${
        backgroundImage
          ? `.hero-bg-img { background-image: url(${backgroundImage.src}); background-repeat: no-repeat; background-size: cover; background-position: center}`
          : ``
      }

      ${
        backgroundImageDark
          ? `.dark .hero-bg-img { background-image: url(${backgroundImageDark.src}); background-repeat: no-repeat; background-size: cover; background-position: center}`
          : ``
      }
    `

  return (
    <>
      <style>{backgroundImageCss}</style>
      <section
        className={classNames(
          bgColor,
          className,
          { 'overflow-hidden': !allowOverflow },
          {
            'hero-bg-img': backgroundImage || backgroundImageDark,
          }
        )}
      >
        {borderTop !== 'none' && (
          <Container
            size={borderTop === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
        {children}
        {borderBottom !== 'none' && (
          <Container
            size={borderBottom === 'boxed' ? 'medium' : 'full'}
            paddingBottom="0"
            paddingTop="0"
          >
            <hr className="border-black/10" />
          </Container>
        )}
      </section>
    </>
  )
}

export default Section
