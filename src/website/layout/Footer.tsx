import React from 'react'
import { RichText, Image, Repeater, types, Link } from 'react-bricks/frontend'
import blockNames from '../blockNames'
import { bgColors, textColors } from '../colors'
import {
  LayoutProps,
  neutralBackgroundSideGroup,
  paddingBordersSideGroup,
  sectionDefaults,
} from '../LayoutSideProps'
import { logos } from '../shared/defaultImages'
import Container from '../shared/components/Container'
import Section from '../shared/components/Section'

interface FooterProps extends LayoutProps {
  siteUrl: string
}

const Footer: types.Brick<FooterProps> = ({
  backgroundColor,
  borderTop,
  borderBottom,
  paddingTop,
  paddingBottom,
  siteUrl,
}) => {
  return (
    <footer>
      <Section
        backgroundColor={backgroundColor}
        borderTop={borderTop}
        borderBottom={borderBottom}
      >
        <Container
          paddingTop={paddingTop}
          paddingBottom={paddingBottom}
          className="flex justify-between flex-wrap"
        >
          <div className="w-full mb-12 lg:w-auto lg:mb-0 lg:mr-8">
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
                <p className={`text-sm ${textColors.GRAY_500}`}>{children}</p>
              )}
              allowedFeatures={[types.RichTextFeatures.Link]}
              renderLink={({ children, href }) => (
                <Link
                  href={href}
                  className="text-sky-500 hover:text-sky-600 hover:-translate-y-px transition-all ease-out duration-150"
                >
                  {children}
                </Link>
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
  tags: ['footer'],

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
    logo: logos.REACT_BRICKS,
    copyright: [
      {
        type: 'paragraph',
        children: [
          {
            text: '© React Bricks, Inc.',
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: 'Proudly made in Italy',
          },
        ],
      },
    ],
    columns: [
      {
        title: 'Company',
        links: [
          {
            linkText: 'About us',
            linkPath: '/',
          },
          {
            linkText: 'Why React Bricks?',
            linkPath: '/',
          },
          {
            linkText: 'Terms of service',
            linkPath: '/',
          },
          {
            linkText: 'Privacy',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Features',
        links: [
          {
            linkText: 'Visual editing',
            linkPath: '/',
          },
          {
            linkText: 'React components',
            linkPath: '/',
          },
          {
            linkText: 'Enterprise-ready',
            linkPath: '/',
          },
          {
            linkText: 'Roadmap',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Use cases',
        links: [
          {
            linkText: 'Content editors',
            linkPath: '/',
          },
          {
            linkText: 'Developers',
            linkPath: '/',
          },
          {
            linkText: 'Enterprises',
            linkPath: '/',
          },
        ],
      },
      {
        title: 'Learn',
        links: [
          {
            linkText: 'Tutorial',
            linkPath: '/',
          },
          {
            linkText: 'Documentation',
            linkPath: '/',
          },
          {
            linkText: 'Videos',
            linkPath: '/',
          },
          {
            linkText: 'Blog',
            linkPath: '/',
          },
        ],
      },
    ],
  }),

  // Sidebar Edit controls for props
  sideEditProps: [neutralBackgroundSideGroup, paddingBordersSideGroup],
}

export default Footer
