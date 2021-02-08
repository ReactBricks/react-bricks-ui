import React from 'react'
import { Plain, RichText, Text, types } from 'react-bricks'

import blockNames from '../blockNames'
import Container from '../layout/Container'

export interface ParagraphProps {
  isSubtitle?: boolean
}

const Paragraph: types.Brick<ParagraphProps> = ({ isSubtitle = false }) => {
  return (
    <Container className="mt-11">
      {isSubtitle && (
        <Text
          propName="subTitle"
          placeholder="Type your subtitle here..."
          renderBlock={(props: any) => {
            return (
              <h2 className="mt-8 text-3xl font-semibold">{props.children}</h2>
            )
          }}
        />
      )}
      <RichText
        propName="paragraphText"
        placeholder="Paragraph..."
        renderBlock={(props: any) => {
          return (
            <p
              className="text-left text-xl leading-8 mt-2"
              style={{ letterSpacing: '-0.003rem' }}
              {...props.attributes}
            >
              {props.children}
            </p>
          )
        }}
        allowedFeatures={[
          types.RichTextFeatures.Bold,
          types.RichTextFeatures.Italic,
          types.RichTextFeatures.Code,
          types.RichTextFeatures.Highlight,
          types.RichTextFeatures.Link,
          types.RichTextFeatures.UnorderedList,
          types.RichTextFeatures.OrderedList,
        ]}
      />
    </Container>
  )
}
Paragraph.schema = {
  name: blockNames.Paragraph,
  label: 'Paragraph',
  getDefaultProps: () => ({
    subTitle: Plain.deserialize('This is a sub-title'),
    paragraphText: Plain.deserialize(
      'This introductory computer science course covers algorithms, data structures, resource management, security, software engineering, and web development.\n Over 2 million students have taken this hallmark computer science course — which started off in 1989 as an exclusive, on-campus course, with just around 200 students a year. Today, attending Harvard in-person costs over $70,000 a year.\nWhy is CS50 Famous?\n\n      CS50 is an extremely famous course, and for good reason.\nCult of Personality\nCS50’s claim to fame has its roots in Harvard Professor David Malan, who The Harvard Crimson describes as having a “cult of personality” for his unique teaching style.\nLet’s take a look at an example lecture'
    ),
    isSubtitle: true,
  }),
  sideEditProps: [
    {
      name: 'isSubtitle',
      label: 'Subtitle y/n',
      type: types.SideEditPropType.Boolean,
    },
  ],
}
export default Paragraph
