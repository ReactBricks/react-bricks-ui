import * as React from 'react'
import classNames from 'classnames'

import { Text, RichText, types, Link } from 'react-bricks/frontend'
import { textColors } from '../colors'
import blockNames from '../blockNames'

interface FaqQuestionProps {
  id: string
}

const FaqQuestion: types.Brick<FaqQuestionProps> = ({ id }) => {
  const idAttribute = id ? { id } : {}

  return (
    <div className="leading-6">
      <Text
        propName="question"
        renderBlock={(props) => (
          <h3
            {...idAttribute}
            className={classNames(
              textColors.GRAY_900,
              'font-extrabold mb-1 relative group'
            )}
            {...props.attributes}
          >
            {id && (
              <a
                href={`#${id}`}
                className="absolute flex left-0 top-1/2 -translate-x-full -translate-y-1/2 pr-2 opacity-0 group-hover:opacity-100 transition-opacity ease-out duration-200"
              >
                <svg
                  viewBox="0 0 1024 1024"
                  width="18px"
                  height="18px"
                  className="fill-gray-400 hover:fill-gray-500 transition-colors ease-out duration-200"
                >
                  <path d="M743.52 529.234c5.616-5.616 83.048-83.046 88.462-88.46 30.944-32.778 47.97-75.636 47.97-120.792 0-47.048-18.304-91.26-51.542-124.484-33.228-33.22-77.43-51.516-124.458-51.516-45.024 0-87.792 16.94-120.536 47.72l-104.458 104.456c-30.792 32.738-47.734 75.512-47.734 120.548 0 41.916 14.576 81.544 41.248 113.196 3.264 3.876 6.666 7.664 10.292 11.29 4.258 4.258 8.704 8.262 13.304 12.022 0.054 0.080 0.096 0.152 0.148 0.232 9.572 7.308 15.778 18.804 15.778 31.776 0 22.094-17.914 40-40.004 40-8.542 0-16.442-2.696-22.938-7.26-2.746-1.93-20.622-17.43-30.35-28.050-0.008-0.010-0.018-0.018-0.026-0.028-4.992-5.432-13.234-15.23-18.552-22.65s-16.556-25.872-17.036-26.736c-0.7-1.262-2.974-5.526-3.422-6.39-0.69-1.334-6.118-12.67-6.114-12.67-14.342-31.96-22.332-67.4-22.332-104.728 0-60.826 21.198-116.648 56.58-160.544 0.252-0.314 4.61-5.594 6.594-7.866 0.304-0.35 5.038-5.636 7.16-7.874 0.252-0.268 105.86-105.874 106.128-106.126 45.902-43.584 107.958-70.314 176.264-70.314 141.382 0 255.998 114.5 255.998 256 0 68.516-26.882 130.688-70.652 176.61-0.144 0.148-109.854 109.546-112.090 111.528-0.958 0.848-5.072 4.352-5.072 4.352-6.448 5.434-13.132 10.592-20.1 15.378 0.412-6.836 0.644-13.702 0.644-20.6 0-26.46-3.108-52.206-8.918-76.918l-0.236-1.102zM616.144 767.82c35.382-43.896 56.58-99.718 56.58-160.544 0-37.328-7.99-72.768-22.332-104.728 0.004 0 0.006-0.002 0.010-0.004-0.258-0.576-0.538-1.14-0.8-1.714-0.686-1.498-2.894-6.112-3.296-6.93-0.668-1.344-2.952-5.732-3.386-6.604-3.48-6.982-8.708-15.126-9.49-16.366-0.498-0.792-0.996-1.58-1.502-2.364-0.834-1.29-15.364-22.066-26.656-34.466-0.008-0.010-0.018-0.018-0.026-0.028-7.056-8.448-24.932-24.198-30.35-28.050-6.47-4.602-14.396-7.26-22.938-7.26-22.090 0-40.004 17.906-40.004 40 0 12.97 6.206 24.466 15.778 31.776 0.052 0.080 0.094 0.152 0.148 0.232 4.602 3.76 20.334 19.434 23.598 23.31 26.672 31.65 41.248 71.28 41.248 113.196 0 45.038-16.944 87.81-47.734 120.548l-104.458 104.456c-32.742 30.782-75.512 47.72-120.536 47.72-47.028 0-91.228-18.294-124.458-51.516-33.236-33.224-51.542-77.436-51.542-124.484 0-45.154 17.028-88.014 47.97-120.792 5.414-5.414 40.812-40.812 68.958-68.958 7.176-7.176 13.888-13.886 19.504-19.502v-0.002c-0.356-1.562-0.246-1.096-0.246-1.096-5.81-24.712-8.918-50.458-8.918-76.918 0-6.898 0.232-13.764 0.644-20.6-6.966 4.788-20.1 15.33-20.1 15.33-0.734 0.62-9.518 8.388-11.68 10.45-0.16 0.154-105.338 105.33-105.482 105.478-43.77 45.922-70.652 108.094-70.652 176.61 0 141.5 114.616 256 255.998 256 68.306 0 130.362-26.73 176.264-70.314 0.27-0.254 105.876-105.86 106.128-106.126 0.004-0.002 13.506-15.426 13.758-15.74z"></path>
                </svg>
              </a>
            )}
            {props.children}
          </h3>
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
        allowedFeatures={[types.RichTextFeatures.Link]}
        renderLink={({ children, href }) => (
          <Link
            href={href}
            className="inline-block text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
          >
            {children}
          </Link>
        )}
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
  sideEditProps: [
    {
      name: 'id',
      label: 'Anchor ID',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default FaqQuestion
