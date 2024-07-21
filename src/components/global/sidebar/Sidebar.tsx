'use client'
import { animated, useSpring } from '@react-spring/web'
import { x } from '@xstyled/styled-components'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { CloseSidebarButton } from '~/components/global/sidebar/CloseSidebarButton'
import { isOpenSidebarState } from '~/state/isOpenSidebarState'

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
  const [isOpenSidebar] = useRecoilState(isOpenSidebarState)
  const sidebarAnimationProps = useSpring({ width: isOpenSidebar ? 300 : 0 })

  return (
    <animated.div style={{ ...sidebarAnimationProps, overflow: 'hidden' }}>
      <x.nav w="200px" h="100vh" flexShrink={0} backgroundColor="sidebar.bg">
        <LinkItem path="/" name="Home" />
        <LinkItem path="/xstyledTest" name="xstyled" />
        <CloseSidebarButton />
      </x.nav>
    </animated.div>
  )
}
