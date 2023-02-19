import React from 'react'
import {
  Text,
  RichText,
  Image,
  File,
  Repeater,
  types,
  Link,
} from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import { bgColors, textColors } from 'website/colors'
import { sectionDefaults } from 'website/LayoutSideProps'
import Container from 'website/shared/layout/Container'
import Section from 'website/shared/layout/Section'

interface FooterProps {
  backgroundColor: any
  borderTop: any
  borderBottom: any
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  siteUrl,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container className="flex justify-between flex-wrap space-x-8">
          <div>
            <Link href={siteUrl} className="block mb-4">
              <Image
                propName="logo"
                alt="Logo"
                maxWidth={300}
                imageClassName="w-48 h-7 object-contain object-left"
              />
            </Link>
            <RichText
              propName="copyright"
              placeholder="Copyright notice"
              renderBlock={({ children }) => (
                <span className={`text-sm ${textColors.GRAY_500}`}>
                  {children}
                </span>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children }) => (
                <Link className="text-sky-500">{children}</Link>
              )}
            />
          </div>
          <Repeater propName="columns" />
        </Container>
      </Section>
    </footer>
  )
}

Footer.schema = {
  name: blockNames.Footer,
  label: 'Footer',
  category: 'layout',
  // tags: [],

  repeaterItems: [
    {
      name: 'columns',
      itemType: blockNames.FooterColumn,
      max: 4,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    ...sectionDefaults,
    backgroundColor: bgColors.LIGHT_GRAY.value,
    borderTop: 'full',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default Footer
