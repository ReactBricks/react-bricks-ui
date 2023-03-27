import blockNames from '../blockNames'
import classNames from 'classnames'
import React, { useRef, useState } from 'react'
import { Text, Repeater, types, Link, Plain } from 'react-bricks/frontend'
import useOnClickOutside from './useClickOutside'
import { textColors } from '../colors'

interface HeaderMenuItemProps {
  linkPath: string
  linkText: any
  submenuItems: any
  isActive: boolean
}

const HeaderMenuItem: types.Brick<HeaderMenuItemProps> = ({
  linkPath,
  linkText,
  submenuItems,
  isActive,
}) => {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLButtonElement>(null)

  useOnClickOutside(ref, () => setOpen(false))

  if (!submenuItems || !submenuItems.length) {
    return (
      <div>
        <Link
          href={linkPath}
          className="hidden lg:inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out text-gray-600 dark:text-white hover:bg-sky-500/20 hover:text-sky-600"
          activeClassName="text-sky-600 bg-sky-500/10"
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => <span>{children}</span>}
          />
        </Link>
        <Link
          href={linkPath}
          className="block lg:hidden text-sm mb-3 transition-colors ease-out text-gray-800 dark:text-white hover:text-sky-600"
        >
          {typeof linkText === 'string' ? linkText : Plain.serialize(linkText)}
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className="hidden lg:block relative">
        <button
          ref={ref}
          className={classNames(
            'text-gray-600 dark:text-white hover:bg-sky-500/20 hover:text-sky-600 inline-flex justify-center items-center text-sm font-bold py-1.5 px-2 rounded-[5px] transition-colors ease-out',
            { 'bg-sky-500/20 text-sky-600': open }
          )}
          onClick={() => setOpen((current) => !current)}
        >
          <Text
            propName="linkText"
            placeholder="Type a text..."
            renderBlock={({ children }) => (
              <div
                className={classNames('', {
                  'text-sky-600 bg-sky-500/10': isActive,
                })}
              >
                {children}
              </div>
            )}
          />
          {open ? (
            <svg
              viewBox="0 0 14 14"
              width="14px"
              height="14px"
              className="inline-block w-[10px] h-[10px] ml-[5px]"
            >
              <path
                d="m7.35 2.9 5.5 5.5a.5.5 0 0 1-.7.7L7 3.96 1.85 9.1a.5.5 0 1 1-.7-.7l5.5-5.5c.2-.2.5-.2.7 0Z"
                fill="currentColor"
              ></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 14 14"
              width="14px"
              height="14px"
              className="inline-block w-[10px] h-[10px] ml-[5px]"
            >
              <path
                d="m1.15 5.6 5.5 5.5c.2.2.5.2.7 0l5.5-5.5a.5.5 0 0 0-.7-.7L7 10.04 1.85 4.9a.5.5 0 1 0-.7.7Z"
                fill="currentColor"
              ></path>
            </svg>
          )}
        </button>
        {open && (
          <div className="w-64 bg-white p-3 border rounded-lg shadow-lg absolute top-9 z-10">
            <Repeater propName="submenuItems" />
          </div>
        )}
      </div>

      <div className="lg:hidden mb-6" role="group">
        <div
          className={`text-xs font-extrabold ${textColors.GRAY_500} uppercase tracking-[0.35rem] mb-4`}
        >
          {typeof linkText === 'string' ? linkText : Plain.serialize(linkText)}
        </div>
        <Repeater propName="submenuItems" />
      </div>
    </div>
  )
}

HeaderMenuItem.schema = {
  name: blockNames.HeaderMenuItem,
  label: 'Menu Item',
  category: 'layout',
  hideFromAddMenu: true,

  repeaterItems: [
    {
      name: 'submenuItems',
      itemType: blockNames.HeaderMenuSubItem,
    },
  ],

  getDefaultProps: () => ({
    linkPath: '/about-us',
    isActive: false,
    linkText: 'About us',
  }),

  sideEditProps: [
    {
      name: 'linkPath',
      label: 'Link to...',
      type: types.SideEditPropType.Text,
    },
  ],
}

export default HeaderMenuItem
