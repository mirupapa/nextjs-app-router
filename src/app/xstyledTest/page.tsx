'use client'

import {
  defaultTheme,
  Preflight,
  ThemeProvider,
  x,
} from '@xstyled/styled-components'
import { commonThemes } from '~/styles/commonThemes'

const theme = {
  ...defaultTheme,
  ...commonThemes,
}
export default function XstyledTest() {
  return (
    <ThemeProvider theme={theme}>
      <Preflight />
      <x.ul display="flex" justifyContent="center" alignItems="center">
        <x.li display="flex" gap="10px">
          <x.label> Color: </x.label>
          <x.span color="_text.primary">primary</x.span>
          <x.span color="_text.secondary">secondary</x.span>
          <x.span color="_text.alert">alert</x.span>
        </x.li>
      </x.ul>
    </ThemeProvider>
  )
}
