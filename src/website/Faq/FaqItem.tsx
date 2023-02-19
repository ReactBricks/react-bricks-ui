import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, types } from 'react-bricks/frontend'
import { textColors } from '../colors'
import blockNames from '../blockNames'

const FaqQuestion: types.Brick = () => {
  return (
    <div className="leading-6">
      <Text
        propName="question"
        renderBlock={(props) => (
          <p
            className={classNames(textColors.GRAY_900, 'font-extrabold mb-1')}
            {...props.attributes}
          >
            {props.children}
          </p>
        )}
        placeholder="Answer..."
      />
      <RichText
        propName="answer"
        renderBlock={(props) => (
          <p className={textColors.GRAY_800} {...props.attributes}>
            {props.children}
          </p>
        )}
        placeholder="Answer..."
      />
    </div>
  )
}

FaqQuestion.schema = {
  name: blockNames.Faq,
  label: 'Question',
  category: 'faq',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq/FaqItem.tsx',
  getDefaultProps: () => ({
    question: 'Is this the latest question?',
    answer:
      "This is either the first question or the one following the one before it. It is the last question if you did't add other questions after it.",
  }),
}

export default FaqQuestion
