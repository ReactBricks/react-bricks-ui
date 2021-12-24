import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, types } from 'react-bricks/frontend'
import { textColors } from '../colors'
import blockNames from '../blockNames'

const FaqQuestion: types.Brick = () => {
  return (
    <div className="leading-6 mb-12">
      <Text
        propName="question"
        renderBlock={(props) => (
          <p
            className={classNames(textColors.gray900, 'font-extrabold mb-1')}
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
          <p className={textColors.gray800} {...props.attributes}>
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
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Faq.tsx',
  getDefaultProps: () => ({
    question: 'Why you should change your CMS today?',
    answer:
      'Because you want to have top user experience and top developer experience.',
  }),
}

export default FaqQuestion
