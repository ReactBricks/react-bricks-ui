import React from 'react'
import {
  Text,
  RichText,
  Image,
  File,
  Repeater,
  types,
} from 'react-bricks/frontend'
import blockNames from 'website/blockNames'
import { textColors } from 'website/colors'

interface FooterColumnProps {}

const FooterColumn: types.Brick<FooterColumnProps> = (props) => {
  return (
    <div>
      <Text
        propName="title"
        placeholder="Title..."
        renderBlock={({ children }) => (
          <div
            className={`text-xs font-black uppercase tracking-[0.35em] min-w-[120px] mb-3 ${textColors.GRAY_400}`}
          >
            {children}
          </div>
        )}
      />
      <Repeater propName="links" />
    </div>
  )
}

FooterColumn.schema = {
  name: blockNames.FooterColumn,
  label: 'Column',
  category: 'layout',
  // tags: [],
  repeaterItems: [
    {
      name: 'links',
      itemType: blockNames.FooterLink,
    },
  ],

  // Defaults when a new brick is added
  getDefaultProps: () => ({
    title: 'Features',
  }),

  // Sidebar Edit controls for props
  sideEditProps: [],
}

export default FooterColumn
