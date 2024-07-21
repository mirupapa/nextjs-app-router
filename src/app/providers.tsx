'use client'
import {
  defaultTheme,
  ThemeProvider,
  Preflight,
} from '@xstyled/styled-components'
import { commonThemes } from '~/styles/commonThemes'

const theme = {
  ...defaultTheme,
  ...commonThemes,
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      {children}
    </ThemeProvider>
  )
}
