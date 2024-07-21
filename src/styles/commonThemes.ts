import { defaultTheme } from '@xstyled/styled-components'

export const commonThemes = {
  ...defaultTheme,
  colors: {
    ...defaultTheme.colors,
    _text: {
      primary: '#000',
      secondary: '#999',
      alert: '#f00',
    },
    sidebar: {
      bg: '#508C9B',
      linkItem: {
        fg: {
          default: '#000',
          hover: '#fff',
          active: '#fff',
        },
        bg: {
          default: '#508C9B',
          hover: '#134B70',
          active: '#201E43',
        },
      },
    },
  },
}

export type AppTheme = typeof commonThemes
