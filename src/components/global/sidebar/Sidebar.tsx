'use client'

import { animated, useSpring } from '@react-spring/web'
import { x } from '@xstyled/styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { ToggleSidebarButton } from '~/components/global/sidebar/ToggleSidebarButton'
import { isOpenSidebarState } from '~/state/isOpenSidebarState'

const LinkItem = ({ path, name }: { path: string; name: string }) => {
  const currentPath = usePathname()

  const isMatchPath =
    currentPath === '/'
      ? currentPath === path
      : path !== '/' && currentPath.startsWith(path)

  return (
    <Link href={path}>
      <x.div
        p="12px"
        color={{
          _: isMatchPath
            ? 'sidebar.linkItem.fg.active'
            : 'sidebar.linkItem.fg.default',
          hover: 'sidebar.linkItem.fg.hover',
        }}
        backgroundColor={{
          _: isMatchPath
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
  const [isOpenSidebar] = useRecoilState(isOpenSidebarState)
  const sidebarAnimationProps = useSpring({ width: isOpenSidebar ? 200 : 0 })

  return (
    <animated.div
      style={{ ...sidebarAnimationProps, overflow: 'hidden', flexShrink: 0 }}
    >
      <x.nav w="200px" h="100vh" flexShrink={0} backgroundColor="sidebar.bg">
        <LinkItem path="/" name="Home" />
        <LinkItem path="/xstyledTest" name="xstyled" />
        <LinkItem path="/emotion" name="emotion" />
        <LinkItem path="/listAndDetail" name="listAndDetail" />
      </x.nav>
    </animated.div>
  )
}
