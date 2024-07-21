'use client'

import { x } from '@xstyled/styled-components'

export default function XstyledTest() {
  return (
    <x.ul
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <x.li display="flex" gap="10px">
        <x.label> Color: </x.label>
        <x.span color="_text.primary">primary</x.span>
        <x.span color="_text.secondary">secondary</x.span>
        <x.span color="_text.alert">alert</x.span>
      </x.li>
    </x.ul>
  )
}
