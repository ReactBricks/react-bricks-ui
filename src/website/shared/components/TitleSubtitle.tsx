import classNames from 'classnames'
import React from 'react'
import { Text } from 'react-bricks'
import { textColors } from '../../colors'

interface TitleSubtitleProps {
  bigCentered?: boolean
  extraboldTitle?: boolean
  className?: string
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  bigCentered = false,
  extraboldTitle = false,
  className = '',
}) => {
  return (
    <div className={className}>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <h2
            className={classNames(
              'text-2xl leading-7',
              extraboldTitle ? 'font-extrabold' : 'font-bold',
              textColors.GRAY_900,
              { 'lg:text-[32px] lg:leading-9 text-center': bigCentered }
            )}
          >
            {children}
          </h2>
        )}
      />
      <Text
        propName="subtitle"
        placeholder="Subtitle..."
        renderBlock={({ children }) => (
          <p
            className={classNames(
              { 'sm:text-lg leading-7': bigCentered },
              textColors.GRAY_600,
              bigCentered ? 'mt-3 text-center' : 'mt-2'
            )}
          >
            {children}
          </p>
        )}
      />
    </div>
  )
}

export default TitleSubtitle
