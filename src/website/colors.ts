export type TextColorName =
  | 'gray900'
  | 'gray800'
  | 'gray700'
  | 'gray600'
  | 'gray500'
  | 'purple500'
  | 'purple300'
  | 'blue300'
  | 'green300'
  | 'pink300'

export type BgColorName =
  | 'white'
  | 'light'
  | 'gray'
  | 'lightBlue'
  | 'orange'
  | 'green'
  | 'darkBlue'
  | 'dark'

export type GradientName = 'none' | 'ocean' | 'violet' | 'sun'
export type BadgeColorName = 'gray' | 'pink' | 'green' | 'blue'

export type BulletColorName =
  | 'pink'
  | 'pinkLight'
  | 'azure'
  | 'azureLight'
  | 'green'
  | 'greenLight'

type Color = {
  label: string
  value: {
    color: string
    className: string
    className2?: string
  }
}

type TextColors = { [key in TextColorName]: string }
type BgColors = { [key in BgColorName]: Color }
type BadgeColors = { [key in BadgeColorName]: Color }
type BulletColors = { [key in BulletColorName]: Color }
type Gradients = { [key in GradientName]: string }

export const textColors: TextColors = {
  gray900: 'text-gray-900 dark:text-gray-100',
  gray800: 'text-gray-800 dark:text-gray-100',
  gray700: 'text-gray-700 dark:text-gray-300',
  gray600: 'text-gray-600 dark:text-gray-400',
  gray500: 'text-gray-500 dark:text-gray-400',
  purple500: 'text-purple-500 dark:text-purple-200',
  purple300: 'text-purple-300 dark:text-purple-300',
  blue300: 'text-blue-300 dark:text-blue-300',
  green300: 'text-green-300 dark:text-green-300',
  pink300: 'text-pink-300 dark:text-pink-300',
}

export const bgColors: BgColors = {
  white: {
    label: 'White',
    value: { color: '#fff', className: 'bg-white dark:bg-gray-900' },
  },
  light: {
    label: 'Light',
    value: { color: '#f7fafc', className: 'bg-gray-100 dark:bg-gray-800' },
  },
  gray: {
    label: 'Gray',
    value: { color: '#edf2f7', className: 'bg-gray-200 dark:bg-gray-800' },
  },
  lightBlue: {
    label: 'Light Blue',
    value: { color: '#ebf8ff', className: 'bg-azure-100 dark:bg-gray-800' },
  },
  orange: {
    label: 'Orange',
    value: { color: '#feebc8', className: 'bg-orange-100 dark:bg-gray-800' },
  },
  green: {
    label: 'Green',
    value: { color: '#c6f6d5', className: 'bg-green-100 dark:bg-gray-800' },
  },
  darkBlue: {
    label: 'Dark Blue',
    value: {
      color: '#2a4365',
      className: 'bg-azure-900 dark:bg-gray-800 dark',
    },
  },
  dark: {
    label: 'Dark',
    value: { color: '#1a202c', className: 'bg-gray-900 dark:bg-gray-900 dark' },
  },
}

export const badgeColors: BadgeColors = {
  gray: {
    label: 'Gray',
    value: { color: '#cbd5e0', className: 'text-gray-500 dark:text-gray-400' },
  },
  pink: {
    label: 'pink',
    value: {
      color: '#fbb6ce',
      className: 'text-pink-400 dark:text-pink-300',
    },
  },
  green: {
    label: 'Green',
    value: {
      color: '#9ae6b4',
      className: 'text-green-400 dark:text-green-300',
    },
  },
  blue: {
    label: 'Blue',
    value: { color: '#90cdf4', className: 'text-blue-400 dark:text-blue-300' },
  },
}

export const bulletColors: BulletColors = {
  pink: {
    label: 'pink',
    value: {
      color: '#f65a8e',
      className: 'bg-pink-500 text-white',
      className2: 'text-pink-500',
    },
  },
  pinkLight: {
    label: 'Light pink',
    value: {
      color: '#ffebef',
      className: 'bg-pink-100 text-pink-500 dark:bg-pink-500 dark:text-white',
      className2: 'text-pink-500',
    },
  },
  azure: {
    label: 'Azure',
    value: {
      color: '#1ea7fd',
      className: 'bg-azure-500 text-white',
      className2: 'text-azure-500',
    },
  },
  azureLight: {
    label: 'Light blue',
    value: {
      color: 'hsl(200, 100%, 96%)',
      className:
        'bg-azure-100 text-azure-500 dark:bg-azure-500 dark:text-white',
      className2: 'text-azure-500',
    },
  },
  green: {
    label: 'Green',
    value: {
      color: 'hsl(100, 46%, 50%)',
      className: 'bg-green-500 text-white',
      className2: 'text-green-500',
    },
  },
  greenLight: {
    label: 'Green light',
    value: {
      color: 'hsl(94, 73%, 87%)',
      className:
        'bg-green-200 text-green-600 dark:bg-green-500 dark:text-white',
      className2: 'text-green-600',
    },
  },
}

export const gradients: Gradients = {
  ocean: 'from-ocean1 to-ocean2',
  violet: 'from-violet1 to-violet2',
  sun: 'from-sun1 to-sun2',
  none: '',
}
