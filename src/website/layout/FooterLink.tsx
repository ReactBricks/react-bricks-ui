import blockNames from '../blockNames'
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
import { textColors } from '../colors'

interface FooterLinkProps {
  linkPath: string
}

const FooterLink: types.Brick<FooterLinkProps> = ({ linkPath }) => {
  return (
    <Link href={linkPath}>
      <Text
        propName="linkText"
        placeholder="Link..."
        renderBlock={({ children }) => (
          <div
            className={`text-sm mb-3 ${textColors.GRAY_500} hover:text-gray-600 dark:hover:text-white transition-all ease-out duration-150 hover:-translate-y-px`}
          >
            {children}
          </div>
        )}
      />
    </Link>
  )
}

FooterLink.schema = {
  name: blockNames.FooterLink,
  label: 'Link',
  category: 'layout',
  hideFromAddMenu: true,
  // tags: [],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    linkText: 'Pricing',
    linkPath: '/',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default FooterLink
