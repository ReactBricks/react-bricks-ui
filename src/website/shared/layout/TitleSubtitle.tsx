import classNames from 'classnames'
import React from 'react'
import { Text } from 'react-bricks'
import { textColors } from 'website/colors'

interface TitleSubtitleProps {
  withPaddingBottom?: boolean
}

const TitleSubtitle: React.FC<TitleSubtitleProps> = ({
  withPaddingBottom = false,
}) => {
  return (
    <div className={classNames({ 'pb-10': withPaddingBottom })}>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <h2
            className={`text-2xl lg:text-[32px] font-black ${textColors.GRAY_900} leading-9`}
          >
            {children}
          </h2>
        )}
      />
      <Text
        propName="subtitle"
        placeholder="Subtitle..."
        renderBlock={({ children }) => (
          <p className={`mt-2 sm:text-xl leading-8 ${textColors.GRAY_600}`}>
            {children}
          </p>
        )}
      />
    </div>
  )
}

export default TitleSubtitle
