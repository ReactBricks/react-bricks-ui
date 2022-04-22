import classNames from 'classnames'
import React from 'react'
import { File, types } from 'react-bricks/frontend'
import { FiFile, FiFilePlus } from 'react-icons/fi'
import blockNames from '../blockNames'

export interface DocumentProps {
  color?: { color: string; className: string }
}

const Document: types.Brick<DocumentProps> = ({ color, ...rest }) => {
  return (
    <div
      className={classNames(
        'flex justify-center bg-gray-50 border border-gray-200 rounded items-center py-2',
        color?.className
      )}
      {...rest}
    >
      <File
        propName="file"
        renderBlock={file => {
          return file ? (
            <div className="flex font-semibold h-full items-center">
              <FiFile className="mr-2" />
              {file.name} - {file.size.toFixed(2)}MB
            </div>
          ) : (
            <div className="flex font-semibold h-full items-center">
              <FiFilePlus className="mr-2" />
              Add document
            </div>
          )
        }}
      />
    </div>
  )
}

Document.schema = {
  name: blockNames.Document,
  label: 'Document',
  category: 'rb-ui website',
  hideFromAddMenu: true,
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Document.tsx',
  getDefaultProps: () => ({
    file: {
      name: 'React Bricks Website.pdf',
      size: 521.929,
      url:
        'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
    },
  }),
  sideEditProps: [
    {
      name: 'color',
      label: 'Color',
      type: types.SideEditPropType.Select,
      selectOptions: {
        display: types.OptionsDisplay.Color,
        options: [
          {
            value: {
              color: '#c6f6d5',
              className: 'bg-green-100 dark:bg-gray-800',
            },
            label: 'Green',
          },
        ],
      },
    },
  ],
}
export default Document
