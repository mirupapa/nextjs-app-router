'use client'

import { x } from '@xstyled/styled-components'

export default function XstyledTestLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <x.div w="100vw" h="100vh">
      {children}
    </x.div>
  )
}
