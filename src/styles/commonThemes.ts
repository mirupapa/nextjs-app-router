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
  },
}

export type AppTheme = typeof commonThemes
