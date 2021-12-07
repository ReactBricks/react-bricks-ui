import React from 'react'
import { types, File } from 'react-bricks/frontend'
import { FiFile, FiFilePlus } from 'react-icons/fi'
import blockNames from '../blockNames'

const Document: types.Brick = ({ ...rest }) => {
  return (
    <div className="h-full flex" {...rest}>
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
  hideFromAddMenu: true,
  getDefaultProps: () => ({
    file: {
      name: 'React Bricks Website.pdf',
      size: 521.929,
      url:
        'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
    },
  }),
}
export default Document
