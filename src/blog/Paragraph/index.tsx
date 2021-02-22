import React from 'react'
import { RichText, Text, types } from 'react-bricks'
import { bgColors } from '../../website/colors'

import blockNames from '../blockNames'
import Container from '../layout/Container'
import Section from '../layout/Section'

export interface ParagraphProps {
  isSubtitle?: boolean
  bg?: { color: string; className: string }
}

const Paragraph: types.Brick<ParagraphProps> = ({
  bg = bgColors.white.value,
  isSubtitle = false,
}) => {
  return (
    <Section bg={bg}>
      <Container>
        {isSubtitle && (
          <Text
            propName="subTitle"
            placeholder="Type your subtitle here..."
            renderBlock={(props: any) => {
              return (
                <h2 className="font-content text-3xl font-black text-gray-700 dark:text-gray-100 mb-3 pt-6">
                  {props.children}
                </h2>
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
                className="text-left text-xl leading-8 mt-2 text-gray-700 dark:text-gray-200"
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
          renderUL={(props: any) => (
            <ul
              className="list-disc list-inside mt-4 font-base"
              {...props.attributes}
            >
              {props.children}
            </ul>
          )}
          renderOL={(props: any) => (
            <ol
              className="list-decimal list-inside mt-4 font-base"
              {...props.attributes}
            >
              {props.children}
            </ol>
          )}
        />
      </Container>
    </Section>
  )
}
Paragraph.schema = {
  name: blockNames.Paragraph,
  label: 'Paragraph',
  getDefaultProps: () => ({
    bg: bgColors.white.value,
    subTitle: 'This is a sub-title',
    paragraphText:
      'This introductory computer science course covers algorithms, data structures, resource management, security, software engineering, and web development.\n Over 2 million students have taken this hallmark computer science course — which started off in 1989 as an exclusive, on-campus course, with just around 200 students a year. Today, attending Harvard in-person costs over $70,000 a year.\nWhy is CS50 Famous?\n\n      CS50 is an extremely famous course, and for good reason.\nCult of Personality\nCS50’s claim to fame has its roots in Harvard Professor David Malan, who The Harvard Crimson describes as having a “cult of personality” for his unique teaching style.\nLet’s take a look at an example lecture',
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
