// import original module declarations
import 'styled-components'
import '@xstyled/system'
import {
  ITheme,
  DefaultTheme as XStyledDefaultTheme,
} from '@xstyled/styled-components'

import { AppTheme } from '~/styles/commonThemes'

// and extend them!
declare module '@xstyled/system' {
  export interface Theme extends AppTheme {}
}
declare module 'styled-components' {
  export interface DefaultTheme extends AppTheme {}
}
