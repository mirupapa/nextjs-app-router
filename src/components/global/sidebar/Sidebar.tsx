'use client'

import { animated, useSpring } from '@react-spring/web'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRecoilState } from 'recoil'
import { isOpenSidebarState } from '~/state/isOpenSidebarState'
import { css } from '../../../../styled-system/css'

const LinkItem = ({ path, name }: { path: string; name: string }) => {
  const currentPath = usePathname()

  const isMatchPath =
    currentPath === '/'
      ? currentPath === path
      : path !== '/' && currentPath.startsWith(path)

  const isMatchStyle = css({
    padding: '12px',
    color: '#fff',
    backgroundColor: '#201E43',
    _hover: {
      color: '#fff',
      backgroundColor: '#134B70',
    },
  })

  const isNotMatchStyle = css({
    padding: '12px',
    color: '#000',
    backgroundColor: '#508C9B',
    _hover: {
      color: '#fff',
      backgroundColor: '#134B70',
    },
  })

  return (
    <Link href={path}>
      <div className={isMatchPath ? isMatchStyle : isNotMatchStyle}>{name}</div>
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
      <nav
        className={css({
          width: '200px',
          height: '100vh',
          flexShrink: 0,
          backgroundColor: '#508C9B',
        })}
      >
        <LinkItem path="/" name="Home" />
        <LinkItem path="/xstyled" name="xstyled" />
        <LinkItem path="/emotion" name="emotion" />
        <LinkItem path="/panda" name="panda" />
        <LinkItem path="/listAndDetail" name="listAndDetail" />
      </nav>
    </animated.div>
  )
}
