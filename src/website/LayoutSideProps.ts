import { types } from 'react-bricks/frontend'
import { badgeColors, bgColors, bulletColors } from './colors'

export const BackgroundColorsSideEditProps: types.ISideEditProp = {
  name: 'bg',
  label: 'Background',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bgColors.white,
      bgColors.dark,
      bgColors.darkBlue,
      bgColors.gray,
      bgColors.green,
      bgColors.light,
      bgColors.lightBlue,
      bgColors.orange,
    ],
  },
}

export const ContainerSizeSideEditProps = {
  name: 'width',
  label: 'Width',
  type: types.SideEditPropType.Select,
  selectOptions: {
    display: types.OptionsDisplay.Select,
    options: [
      { value: 'sm', label: 'Small' },
      { value: 'md', label: 'Medium' },
      { value: 'lg', label: 'Large' },
      { value: 'full', label: 'Fullwidth' },
    ],
  },
}

export const BadgeColorsSideEditProps = {
  name: 'color',
  label: 'Badge Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      badgeColors.gray,
      badgeColors.pink,
      badgeColors.blue,
      badgeColors.green,
    ],
  },
}

export const BulletColorsSideEditProps = {
  name: 'color',
  label: 'Color',
  type: types.SideEditPropType.Select,
  shouldRefreshText: true,
  selectOptions: {
    display: types.OptionsDisplay.Color,
    options: [
      bulletColors.pink,
      bulletColors.pinkLight,
      bulletColors.sky,
      bulletColors.skyLight,
      bulletColors.green,
      bulletColors.greenLight,
    ],
  },
}
