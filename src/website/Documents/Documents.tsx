import classNames from 'classnames'
import React from 'react'
import { Repeater, types } from 'react-bricks/frontend'
import {
  BackgroundColorsSideEditProps,
  ContainerSizeSideEditProps,
} from 'website/LayoutSideProps'
import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'
export interface DocumentsProps {
  bg?: { color: string; className: string }
}

const Documents: types.Brick<DocumentsProps> = ({ bg }) => {
  return (
    <Section bg={bg}>
      <Container
        className={classNames(
          'py-12 flex flex-wrap justify-center items-center'
        )}
      >
        <Repeater
          propName="files"
          renderWrapper={(items) => (
            <ul className="w-full p-6 grid grid-cols-3 gap-6 ">{items}</ul>
          )}
          renderItemWrapper={(item) => <li>{item}</li>}
        />
      </Container>
    </Section>
  )
}

Documents.schema = {
  name: blockNames.Documents,
  label: 'Documents',
  category: 'rb-ui website',
  playgroundLinkLabel: 'View source code on Github',
  playgroundLinkUrl:
    'https://github.com/ReactBricks/react-bricks-ui/blob/master/src/website/Documents/Documents.tsx',
  getDefaultProps: () => ({
    files: [
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url: 'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url: 'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
      {
        file: {
          name: 'React Bricks Website.pdf',
          size: 521.929,
          url: 'https://files.reactbricks.com/bcc1d1cd-3447-4489-8c66-26db41d96d17/React Bricks Website.pdf',
        },
      },
    ],
  }),
  sideEditProps: [BackgroundColorsSideEditProps, ContainerSizeSideEditProps],
  repeaterItems: [
    {
      name: 'files',
      itemType: blockNames.Document,
      itemLabel: 'Document',
    },
  ],
}

export default Documents
