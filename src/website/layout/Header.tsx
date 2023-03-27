import React, { useState } from 'react'
import { Image, Repeater, types, Link } from 'react-bricks/frontend'
import { FiMenu, FiX } from 'react-icons/fi'
import blockNames from '../blockNames'
import { bgColors, buttonColors } from '../colors'
import {
  backgroundColorsEditProps,
  borderBottomEditProp,
  LayoutProps,
} from '../LayoutSideProps'
import Section from '../shared/components/Section'

interface HeaderProps extends LayoutProps {}

const Header: types.Brick<HeaderProps> = ({
  backgroundColor,
  borderBottom,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Section
      allowOverflow
      backgroundColor={backgroundColor}
      borderBottom={borderBottom ? 'full' : 'none'}
    >
      <nav className="py-5 px-5 sm:mx-[5.55555%] xl:mx-[11.1111%] flex justify-start items-center">
        <Link
          href="/"
          aria-label="home"
          className="inline-flex py-1.5 px-2 mr-6"
        >
          <Image
            propName="logo"
            alt="Logo"
            maxWidth={300}
            imageClassName="block w-32 h-7 object-contain object-left"
          />
        </Link>
        <div className="hidden lg:flex items-center space-x-2">
          <Repeater propName="menuItems" />
        </div>
        <div className="hidden lg:block ml-auto">
          <Repeater
            propName="buttons"
            renderWrapper={(items) => (
              <div className="flex flex-row space-x-5 items-center justify-end">
                {items}
              </div>
            )}
          />
        </div>
        <div className="relative ml-auto lg:hidden">
          <button
            className="p-1 w-7 h-7 flex justify-center items-center rounded-[5px] hover:bg-sky-500/20 hover:text-sky-600 focus:bg-sky-500/20 focus:text-sky-600"
            onClick={() => setMobileMenuOpen((current) => !current)}
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
          {mobileMenuOpen && (
            <div className="absolute top-8 right-0 w-64 bg-white p-5 border rounded-lg shadow-lg z-10">
              <Repeater propName="menuItems" />
            </div>
          )}
        </div>
      </nav>
    </Section>
  )
}

Header.schema = {
  name: blockNames.Header,
  label: 'Header',
  category: 'layout',
  tags: ['header', 'menu'],
  repeaterItems: [
    {
      name: 'menuItems',
      itemType: blockNames.HeaderMenuItem,
      itemLabel: 'Item',
      min: 0,
      max: 6,
    },
    {
      name: 'buttons',
      itemType: blockNames.Button,
      itemLabel: 'Button',
      min: 0,
      max: 2,
    },
  ],
  sideEditProps: [
    {
      groupName: 'Layout',
      defaultOpen: true,
      props: [backgroundColorsEditProps, borderBottomEditProp],
    },
  ],
  getDefaultProps: () => ({
    backgroundColor: bgColors.WHITE,
    borderBottom: true,
    menuItems: [
      {
        linkPath: '/',
        linkText: 'Home',
      },
      {
        linkPath: '/about-us',
        linkText: 'About us',
      },
      {
        linkPath: '',
        linkText: 'Features',
        submenuItems: [
          {
            linkText: 'Visual editing',
            linkDescription:
              'The best visual experience for your content editors',
            linkPath: '/',
          },
        ],
      },
    ],
    logo: {
      src: 'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      placeholderSrc:
        'https://images.reactbricks.com/original/8d0eb40f-6e1a-4f6c-9895-a06767fcf5fa.svg',
      srcSet: '',
      width: 450,
      height: 100,
      alt: 'React Bricks',
      seoName: 'react-bricks',
    },
    buttons: [
      {
        text: 'Edit content',
        href: '/admin',
        isTargetBlank: false,
        buttonColor: buttonColors.SKY.value,
        type: 'solid',
        padding: 'small',
      },
    ],
  }),
}

export default Header
