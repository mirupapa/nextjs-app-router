'use client'
import { x } from '@xstyled/styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const LinkItem = ({ path, name }: { path: string; name: string }) => {
  const currentPath = usePathname()
  return (
    <Link href={path}>
      <x.div
        p="12px"
        color={{
          _:
            path === currentPath
              ? 'sidebar.linkItem.fg.active'
              : 'sidebar.linkItem.fg.default',
          hover: 'sidebar.linkItem.fg.hover',
        }}
        backgroundColor={{
          _:
            path === currentPath
              ? 'sidebar.linkItem.bg.active'
              : 'sidebar.linkItem.bg.default',
          hover: 'sidebar.linkItem.bg.hover',
        }}
      >
        {name}
      </x.div>
    </Link>
  )
}

export const Sidebar = () => {
  return (
    <x.nav w="200px" flexShrink={0} backgroundColor="sidebar.bg">
      <LinkItem path="/" name="Home" />
      <LinkItem path="/xstyledTest" name="xstyled" />
    </x.nav>
  )
}
