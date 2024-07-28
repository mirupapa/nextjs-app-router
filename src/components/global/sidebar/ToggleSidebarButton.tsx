'use client'

import { animated, useSpring } from '@react-spring/web'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useRecoilState } from 'recoil'
import { isOpenSidebarState } from '~/state/isOpenSidebarState'
import { css } from '../../../../styled-system/css'

export const ToggleSidebarButton = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useRecoilState(isOpenSidebarState)
  const buttonPositionProps = useSpring({ left: isOpenSidebar ? 145 : 10 })

  const toggleSidebar = () => {
    setIsOpenSidebar((cur) => !cur)
  }

  return (
    <animated.div
      style={{ ...buttonPositionProps, position: 'fixed', bottom: '10px' }}
    >
      <div
        className={css({
          p: '12px',
          backgroundColor: 'white',
          color: 'black',
          borderRadius: '6px',
          cursor: 'pointer',
          _hover: {
            backgroundColor: 'gray',
            color: 'white',
          },
        })}
        onClick={toggleSidebar}
      >
        {isOpenSidebar ? <FaArrowLeftLong /> : <FaArrowRightLong />}
      </div>
    </animated.div>
  )
}
